import MainHeading from "@/components/shared/MainHeading";

export default function OurStory() {
  return (
    <section className="container section-gap">
      <MainHeading heading="قصتنا" subHeading="نبذة عن قصتنا" />
      <div className="flex items-center justify-between ">
        <div className="mx-auto">
          <img src="/images/story.jpg" className="size-32 rounded-full"></img>
        </div>
        <div className="mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-primary">بدايتنا</h2>
          <p className="text-muted-foreground max-w-md">
            بدأنا رحلتنا في عام 2025 بشغف تجاه التكنولوجيا، وقررنا نوفر متجر
            يقدم الجودة والسعر العادل في مكان واحد.
          </p>
        </div>
      </div>
    </section>
  );
}
