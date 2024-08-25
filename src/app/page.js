import Link from "next/link";
import Container from "./Components/Container";
import Title from "./Components/Title";

const HomePage = () => {
  const id = "5131";
  return (
    <Container>
      <Title title="Home Page" />
      <Link href={`/products/${id}`}>Single Products page</Link>
      <p className="text-sm tracking-wide mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        itaque nesciunt facilis ipsum animi alias. Quos ratione sunt amet beatae
        quas quidem fugiat, ut laudantium qui. Odio nam iusto temporibus
        perferendis atque id voluptatem. Vero magnam doloribus tempora ipsa ab
        similique odit suscipit, saepe adipisci pariatur, perspiciatis dolor
        sed. Harum aliquam ipsum iure corrupti quasi aspernatur ipsa voluptate
        in fugit, ullam doloribus nam doloremque delectus ut nulla quod
        veritatis quos commodi laborum, dolores non, ab obcaecati alias dicta!
        Quidem aliquam rerum dolore molestiae, aspernatur praesentium hic fugit
        laboriosam natus magnam ullam! Id repudiandae ea molestiae similique
        dolorum. Ratione, esse assumenda.
      </p>
    </Container>
  );
};

export default HomePage;
