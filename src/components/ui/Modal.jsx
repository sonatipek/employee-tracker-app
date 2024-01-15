import Card from "./Card";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Modal({ error, buttonEvent }) {
  return (
    <div className="fixed top-0 pt-[15svh] left-0 flex justify-center mx-auto w-screen h-screen z-50 backdrop-blur-sm backdrop-brightness-50">
      <div className="w-2/5">
        <Card additionalClasses="h-fit">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <div className="flex gap-2 justify-start border-b pb-3">
              <ExclamationTriangleIcon className="size-6 text-red-600" />
              <Title additionalClasses={"text-xl leading-6 font-semibold"}>
                {error.title}
              </Title>
            </div>

            <div className="mt-2 pb-3">
              <Text textType="subtext" additionalClasses="text-sm px-3">
                {error.content}
              </Text>
            </div>

            <Button
              additionalClasses="mt-4 py-2 w-1/2 bg-red-500 block rounded-lg hover:-translate-y-0 text-sm"
              onClickEvent={buttonEvent}
            >
              Kapat
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
