import { useState, Fragment, useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export default function AlertDOM() {
  const [open, setOpen] = useState(false);
  const isAlert = useSelector((state) => state.addToCartSlice.totalAmount);
  console.log(useSelector((state) => state.addToCartSlice));

  useEffect(() => {
    if (isAlert > 0) {
      setOpen(true);

      const timeoutId = setTimeout(() => {
        setOpen(false);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setOpen(false);
    }
  }, [isAlert]);

  return (
    <div className="fixed bottom-4 right-7">
      <Fragment>
        <Alert
          icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
          open={open}
          onClose={() => setOpen(false)}
          animate={{
            mount: { x: 0 },
            unmount: { x: 400 },
          }}
          className="max-w-xs rounded-sm border-l-4 border-[#2ec946] bg-[#2ec946] font-medium text-white transition-all duration-500 ease-out"
        >
          Item added successfully
        </Alert>
      </Fragment>
    </div>
  );
}
