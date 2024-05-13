import CardUI from "@/components/component/card-ui";
export default function Page() {
  const placeholder = {
    1: {
      Number: 1,
      Name: "Placeholder",
      Description:
        "This is a simple card component with a title, image, and description.",
    },
    2: {
      Number: 2,
      Name: "Placeholder",
      Description:
        "This is a simple card component with a title, image, and description.",
    },
  };
  return (
    <>
      <div className="flex  justify-between w-[100vw] ">
        {Object.values(placeholder).map((item, index) => (
          <div
            key={index}
            className="animate-slide-up w-[30vw] h-[100vh] flex justify-center items-center mx-auto"
            style={{ overflowAnchor: "none" }}
          >
            <CardUI
              number={item.Number}
              title={item.Name}
              description={item.Description}
            />
          </div>
        ))}
      </div>
    </>
  );
}
