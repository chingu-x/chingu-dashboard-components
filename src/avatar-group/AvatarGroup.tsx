interface AvatarGroupProps {
  children: React.ReactNode;
}

export default function AvatarGroup({ children }: AvatarGroupProps) {
  return (
    <div className="flex flex-wrap col-span-2 ml-1 -space-x-2 left-28">
      {children}
    </div>
  );
}
