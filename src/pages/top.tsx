import { useQueryParam } from "~/hooks/useQueryParam";
import { Template1Top } from "~/templates/1/top";
import { Template2Top } from "~/templates/2/top";
import { Template3Top } from "~/templates/3/top";

const PageTop = () => {
  const { asString } = useQueryParam();
  const template = asString("template");

  const component = () => {
    switch (template) {
      case "1":
        return <Template1Top />;
      case "2":
        return <Template2Top />;
      case "3":
        return <Template3Top />;
    }
  };

  return <div>{component()}</div>;
};

export default PageTop;
