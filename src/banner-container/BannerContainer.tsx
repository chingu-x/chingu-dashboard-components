interface BannerContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function BannerContainer({
  title,
  description,
  children,
}: BannerContainerProps) {
  return (
    <div className="box-border flex max-h-[320px] w-full flex-row justify-between gap-x-10 px-20 lg:gap-x-20">
      {children}
      <div className="flex max-w-[700px] flex-col justify-center gap-y-3.5 2xl:max-w-none">
        <h1 className="text-3xl font-bold text-base-300">{title}</h1>
        <p className="text-lg font-medium text-base-300">{description}</p>
      </div>
    </div>
  );
}
