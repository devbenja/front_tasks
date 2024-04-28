import { forwardRef } from "react";

export const TextArea = forwardRef((props, ref, children) => {
  return (
    <textarea
      className="bg-zinc-800 px-3 py-2 block my-2 w-full"
      ref={ref}
      {...props}
    >
      {children}
    </textarea>
  );
});