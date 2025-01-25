import Heading2 from "../../Reusable/Heading2/Heading2";
import Paragraph from "../../Reusable/Paragraph/Parahraph";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import Container from "../../Shared/Container/Container";

const WhyUs = () => {
  const whyChooseUsDetails = [
    {
      label: "Experienced Trainers",
      value: "35+",
    },
    {
      label: "Courses Rolling Out",
      value: "30k+",
    },
    {
      label: "Trained Students",
      value: "100k+",
    },
    {
      label: "Community Earning",
      value: "10k+",
    },
  ];
  return (
    <div className="bg-gradient-gray py-[64px] font-Inter">
      <Container>
        <div className="flex flex-col gap-9 items-center justify-center">
          <SectionHeading
            heading="Why PM Gurukul?"
            description="Your Pathway to Growth, Learning, and Success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start md:items-center mx-auto w-full xl:w-[90%] gap-10 lg:gap-[90px]">
            {whyChooseUsDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[90px] justify-center mx-auto w-[280px] sm:justify-start"
              >
                <div className="flex flex-col gap-2 md:gap-0 sm:items-start items-center sm:text-left text-center">
                  <Heading2>{item.value}</Heading2>
                  <Paragraph>{item.label}</Paragraph>
                </div>
                {index !== whyChooseUsDetails.length - 1 && (
                  <div className="w-[3px] h-[100px] bg-neutral-10/40 hidden lg:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
