import "./Inventory.css";
import InventoryItems from "../components/InventoryItems";

const InventoryPage = () => {
  return (
    <div>
      <section id="inventory" className="py-2">
        <div className="container inventory-inner">
          <div className="text-center py-3">
            <h1 className="title-dark">Our inventory</h1>
          </div>

          <p className="lead text-center">
            We offer huge variety of vehicles which you can enjoy
          </p>

          <InventoryItems />
        </div>
      </section>
    </div>
  );
};

export default InventoryPage;
