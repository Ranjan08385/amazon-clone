import React from "react";
import "./Home.css";
import Product from "./Product";

const home_image =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Boat/255/Boat_Gw_1500x600._CB416191836_.jpg";

const product_img1 =
  "https://images-eu.ssl-images-amazon.com/images/I/71-8y4L6jKL._AC_UL200_SR200,200_.jpg";
const product_img2 =
  "https://m.media-amazon.com/images/I/81MEmcBaxVL._AC_UY218_.jpg";
const product_img3 =
  "https://images-eu.ssl-images-amazon.com/images/I/41k+AXJs4kL._AC_US160_FMwebp_QL70_.jpg";

const product_img4 =
  "https://m.media-amazon.com/images/I/61+FFGMLwVL._AC_UY218_.jpg";
const product_img5 =
  "https://m.media-amazon.com/images/I/313xp3L4MzL._AC_UY218_.jpg";
const product_img6 =
  "https://m.media-amazon.com/images/I/91oKbXQbBtL._AC_UY218_.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={home_image} alt="" />
        <div className="home__row">
          <Product
            title={"OnePlus Nord 5G (Gray Ash, 12GB RAM, 256GB Storage)"}
            price={"29,999.00"}
            image={product_img1}
            star={5}
          />
          <Product
            title={
              "New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Grey (2nd Generation)"
            }
            price={"1,16,900.00"}
            image={product_img3}
            star={4}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "HP 14 Ultra Thin & Light 14-inch Laptop (10th Gen i3-1005G1/8GB/256GB SSD)"
            }
            price={"35,990.00"}
            image={product_img2}
            star={3}
          />
          <Product
            title={
              "Blaupunkt SBW100 120Watts Wired Soundbar with Subwoofer and Bluetooth"
            }
            price={"7,236.00"}
            image={product_img4}
            star={3}
          />
          <Product
            title={
              "Mercusys MW325R 300Mbps Enhanced Wireless Wi-Fi WiFi Router | Four 5dBi High Gain Antennas"
            }
            price={"949.00"}
            image={product_img5}
            star={2}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "Samsung 109 cm (43 inches) 4K Ultra HD Smart LED TV UA43TU8000KBXL (Black) (2020 Model)"
            }
            price={"43,900.00"}
            image={product_img6}
            star={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
