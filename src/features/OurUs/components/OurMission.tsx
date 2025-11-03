export default function OurMission() {
  return (
    <section className="container section-gap ">
      <div className="flex items-center justify-between ">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-primary">مهمتنا</h2>
          <p className="text-muted-foreground max-w-md">
            هدفنا هو جعل تجربة الشراء التقنية أسهل وأسرع وأكثر ثقة لعملائنا.
          </p>
        </div>
        <div className="mx-auto">
          <img src="/images/target.jpg" className="size-32 rounded-full"></img>
        </div>
      </div>
    </section>
  );
}
