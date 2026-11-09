import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { categorySlug } = useParams();

  return (
    <div className="text-white p-10">
      <h1 className="text-4xl font-bold">{categorySlug}</h1>
    </div>
  );
}
