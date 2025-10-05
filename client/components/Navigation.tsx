import Link from "next/link";

const NavItem = [
  { _id: 1, name: "Home", link: "/" },
  { _id: 2, name: "About", link: "/" },
  { _id: 3, name: "Services", link: "/" },
  { _id: 4, name: "Blog", link: "/" },
  { _id: 5, name: "All Pages", link: "/" },
];

const Navigation = () => {
  return (
    <div className="flex items-center gap-8">
      {NavItem?.map((item) => (
        <Link
          key={item?._id}
          href={item?.link}
          className="text-lg text-white font-medium"
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
