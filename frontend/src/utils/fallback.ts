import { SyntheticEvent } from "react";
import { FALLBACK_IMAGE } from "../constants";

export function imageFallback(e: SyntheticEvent<HTMLImageElement>) {
  const { currentTarget } = e;
  currentTarget.src = FALLBACK_IMAGE;
}
