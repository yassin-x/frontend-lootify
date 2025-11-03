import MainHeading from "@/components/shared/MainHeading";

export default function OurPartners() {
  const partners = [
    { name: "Sigma", logo: "/partners/sigma.png" },
    { name: "Dell", logo: "/partners/dell.jpg" },
    { name: "Lenovo", logo: "/partners/lenovo.jpg" },
    { name: "MSI", logo: "/partners/msi.jpg" },
    { name: "HP", logo: "/partners/hp.jpg" },
  ];

  return (
    <section className="section-gap container">
      <MainHeading heading="شركاؤنا في النجاح" />
      <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-12">
        {partners.map((p) => (
          <div key={p.name} className="px-4">
            <img
              src={p.logo}
              alt={p.name}
              className="h-16 w-auto rounded-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
