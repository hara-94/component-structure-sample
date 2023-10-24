import { useRouter } from "next/router";

export const useQueryParam = () => {
  const router = useRouter();

  const asString = (key: string) => {
    const value = router.query[key];
    return typeof value === "string" ? value : void 0;
  };

  return { asString };
};
