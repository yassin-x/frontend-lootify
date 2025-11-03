import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section className="section-gap flex items-center justify-center">
      <div className="max-w-md w-full bg-secondary/10 p-8 rounded-2xl text-center shadow-lg space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">تواصل معنا</h2>
          <p className="text-sm text-muted-foreground mt-2">
            أنا متاح للتعاون والتواصل معكم في جميع الأوقات.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="text-muted-foreground hover:text-primary transition"
          >
            <FaLinkedin className="text-xl" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-muted-foreground hover:text-primary transition"
          >
            <FaTwitter className="text-xl" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-muted-foreground hover:text-primary transition"
          >
            <FaFacebook className="text-xl" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-muted-foreground hover:text-primary transition"
          >
            <FaEnvelope className="text-xl" />
          </Button>
        </div>
      </div>
    </section>
  );
}
