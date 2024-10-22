"use client";

import { useCallback, useEffect, useRef } from "react";

type FloatingIndicator = {
  target: HTMLElement | null | undefined;

  /** Parent element with relative position based on which indicator position should be calculated */
  parent: HTMLElement | null | undefined;
};

export const FloatingIndicator = ({ target, parent }: FloatingIndicator) => {
  const transitionTimeout = useRef<number>();
  const ref = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!target || !parent) {
      return;
    }

    const targetRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const left = targetRect.left - parentRect.left;
    const top = targetRect.top - parentRect.top;

    if (ref.current) {
      ref.current.style.transform = `translate(${left}px, ${top}px)`;
      ref.current.style.left = "0";
      ref.current.style.top = "0";
      ref.current.style.opacity = "1";
      ref.current.style.transition =
        "transform 0.1s ease-out, opacity .1s ease-out";
      ref.current.style.width = `${targetRect.width}px`;

      ref.current.style.height = `${targetRect.height}px`;
      ref.current.style.zIndex = "-1";
    }
  }, [target, parent]);

  const targetResizeObserver = useRef<ResizeObserver>();
  const parentResizeObserver = useRef<ResizeObserver>();

  const updatePositionWithoutAnimation = useCallback(() => {
    window.clearTimeout(transitionTimeout.current);
    if (ref.current) {
      ref.current.style.transitionDuration = "0ms";
    }
    updatePosition();
    transitionTimeout.current = window.setTimeout(() => {
      if (ref.current) {
        ref.current.style.transitionDuration = "";
      }
    }, 30);
  }, [updatePosition]);

  useEffect(() => {
    updatePosition();

    if (target) {
      targetResizeObserver.current = new ResizeObserver(
        updatePositionWithoutAnimation
      );
      targetResizeObserver.current.observe(target);

      if (parent) {
        parentResizeObserver.current = new ResizeObserver(
          updatePositionWithoutAnimation
        );
        parentResizeObserver.current.observe(parent);
      }

      return () => {
        targetResizeObserver.current?.disconnect();
        parentResizeObserver.current?.disconnect();
      };
    }

    return undefined;
  }, [parent, target, updatePosition, updatePositionWithoutAnimation]);

  return <div className="w-full bg-neutral-800 absolute" ref={ref}></div>;
};
