"use client";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { clsx } from "clsx";
import { memo, useState } from "react";

const enum ELLIPSIS {
  ONE = "ellipsisOne",
  TWO = "ellipsisTwo",
}

const FIRST_PAGE = 1;
const PAGE_DELTA = 4;

type Props = {
  className?: string;
  defaultPage?: number;
  iconOnly?: boolean;
  labelNext?: string;
  labelPrevious?: string;
  onPageChange: (index: number) => void;
  page?: number;
  pageCount: number;
};

/**
 * Pagination component that allows users to access paginated content.
 *
 * Note that pages are represented as one-based indices.
 */
export const Pagination = memo(
  ({
    className,
    defaultPage = FIRST_PAGE,
    iconOnly = false,
    labelNext = "Next",
    labelPrevious = "Previous",
    onPageChange,
    page: controlledPage,
    pageCount,
  }: Props) => {
    const [internalPage, setInternalPage] = useState(defaultPage);
    const isUncontrolled = controlledPage === undefined;
    const page = isUncontrolled ? internalPage : controlledPage;
    const lastPage = pageCount;

    if (pageCount < 1 || !Number.isSafeInteger(pageCount)) {
      const message = "Page count must be a positive safe integer";
      console.error(message, { pageCount });
      return <p>Error: {message}</p>;
    }

    if (page < FIRST_PAGE || page > lastPage || !Number.isSafeInteger(page)) {
      const message = `Page must be a safe integer between ${FIRST_PAGE} and ${lastPage}`;
      console.error(message, { page });
      return <p>Error: {message}</p>;
    }

    // Rules for ellipses:
    // - First and last pages are always shown.
    // - Pages just before and after the current page are shown (if they exist).
    // - Ellipses replace remaining pages if they would replace at least two pages.
    let items: (number | ELLIPSIS)[];

    // Handle pages from 1 to page
    if (page >= FIRST_PAGE + PAGE_DELTA) {
      items = [1, ELLIPSIS.ONE, page - 1, page];
    } else {
      items = Array.from({ length: page }, (_, i) => i + 1);
    }

    // Handle pages from page + 1 to lastPage
    if (page <= lastPage - PAGE_DELTA) {
      items.push(page + 1, ELLIPSIS.TWO, lastPage);
    } else {
      items.push(
        ...Array.from({ length: lastPage - page }, (_, i) => page + 1 + i),
      );
    }

    const handlePageChange = (newPage: number) => {
      if (isUncontrolled) setInternalPage(newPage);
      onPageChange(newPage);
    };

    const iconStyle = clsx(
      "flex min-h-9 min-w-9 items-center",
      iconOnly ? "px-2.5 py-1.5" : "gap-2 px-4 py-1.5",
      "disabled:cursor-not-allowed disabled:text-neutral-400",
    );
    const hoverStyle = clsx("rounded-sm hover:shadow-sm");
    const focusVisibleStyle = clsx(
      "rounded-sm outline-4 focus-visible:shadow-none",
      "focus-visible:outline-ring-brand",
    );
    const isPreviousDisabled = page === FIRST_PAGE;
    const isNextDisabled = page === lastPage;

    return (
      <nav
        aria-label="Pagination"
        className={clsx(
          "flex bg-white px-7 pt-4 pb-5",
          "text-sm font-medium text-neutral-600",
          className,
        )}
      >
        <button
          type="button"
          aria-label={iconOnly ? labelPrevious : undefined}
          className={clsx(
            iconStyle,
            isPreviousDisabled || hoverStyle,
            focusVisibleStyle,
          )}
          disabled={isPreviousDisabled}
          onClick={() => {
            handlePageChange(page - 1);
          }}
        >
          <RiArrowLeftSLine aria-hidden className="size-5" />
          {iconOnly ? null : labelPrevious}
        </button>
        <ol className="flex">
          {items.map((item) => {
            const isActivePage = item === page;
            const isEllipsis = typeof item === "string";
            const style = clsx("grid min-h-9 min-w-9 place-items-center p-2");

            return (
              <li aria-hidden={isEllipsis} key={item}>
                {isEllipsis ? (
                  <div className={clsx("cursor-default", style)}>...</div>
                ) : (
                  <button
                    type="button"
                    aria-current={isActivePage ? "page" : "false"}
                    className={clsx(
                      style,
                      "transition-[background-color,outline-color,box-shadow]",
                      isActivePage && "shadow-sm",
                      hoverStyle,
                      focusVisibleStyle,
                    )}
                    onClick={() => {
                      if (isActivePage) return;
                      handlePageChange(item);
                    }}
                  >
                    {item}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
        <button
          type="button"
          aria-label={iconOnly ? labelNext : undefined}
          className={clsx(
            iconStyle,
            isNextDisabled || hoverStyle,
            focusVisibleStyle,
          )}
          disabled={isNextDisabled}
          onClick={() => {
            handlePageChange(page + 1);
          }}
        >
          {iconOnly ? null : labelNext}
          <RiArrowRightSLine aria-hidden className="size-5" />
        </button>
      </nav>
    );
  },
);

Pagination.displayName = "Pagination";
