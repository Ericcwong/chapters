import Image from "next/image";
interface cardProps {
  title: string;
  description: string;
  image: string;
}

function Cards({ title, description, image }: cardProps) {
  return (
    <div className="flex flex-col border">
      <Image src={image} alt={title + " card"} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Cards;
