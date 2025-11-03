import MainHeading from "@/components/shared/MainHeading";
import { MagicCard } from "@/components/ui/magic-card";
import { Clock, Gem, Handshake, Palette } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "الجودة والسعر العادل",
      desc: "نقدم خدمات بجودة عالية بأسعار مناسبة توازن بين الاحترافية والتكلفة العادلة.",
      icon: Gem,
    },
    {
      title: "الالتزام بالمواعيد",
      desc: "نحترم وقتك ونسلم المشاريع في الوقت المحدد بدون أي تأخير.",
      icon: Clock,
    },
    {
      title: "دعم فني مستمر",
      desc: "نوفّر دعمًا فنيًا سريعًا لأي تعديلات أو مشاكل بعد التسليم.",
      icon: Handshake,
    },
    {
      title: "تصميم وتجربة مميزة",
      desc: "نركز على تجربة المستخدم والتصميم الحديث لتقديم موقع يجذب الزوار.",
      icon: Palette,
    },
  ];

  return (
    <section className="section-gap container">
      <MainHeading heading="لماذا تختارنا" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <MagicCard
              key={card.title}
              className="flex flex-col items-center justify-between text-center h-full p-6 rounded-2xl transition-transform hover:scale-[1.03]"
            >
              <div className="mb-4 mt-2 text-green-400">
                <Icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </MagicCard>
          );
        })}
      </div>
    </section>
  );
}
