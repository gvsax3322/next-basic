"use client";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};
const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error.message);
  });
  return (
    <>
      <h1
        style={{
          fontSize: "2.5em",
          color: "#ff4d4d",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        에러가 발생했습니다
      </h1>

      <button
        onClick={() => {
          reset();
        }}
      >
        새로고침
      </button>
    </>
  );
};

export default Error;
