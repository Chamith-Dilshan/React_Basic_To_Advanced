import NavBarComp from "../NavBarComp";
import InputIngredients from "./InputIngredients";

const ChefAI = () => {
  return (
    <main className="w-screen h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <NavBarComp
        navBarProps={{ imageSrc: "chef_hat.svg", title: "Chef AI" }}
      />
      <InputIngredients />
    </main>
  );
};

export default ChefAI;
