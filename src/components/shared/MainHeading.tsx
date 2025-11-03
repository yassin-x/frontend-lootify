interface Props {
  heading: string;
  subHeading?: string;
}

export default function MainHeading({ heading, subHeading }: Props) {
  return (
    <div className="flex items-center flex-col justify-center select-none mb-6">
      <h2 className="text-3xl font-bold text-center italic">{heading}</h2>
      <p className="text-muted-foreground text-sm">{subHeading}</p>
    </div>
  );
}
