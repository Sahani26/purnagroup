import React, { useEffect, useState } from 'react';
 
import '../style/PowerProduct.css'
const products = [
    {
        p1: "https://5.imimg.com/data5/SELLER/Default/2023/4/299567669/LI/QX/GB/99297565/blue-pvc-shroud-250x250.jpg",
        productname: "Blue PVC Shroud"
    },
    {
        p1: "https://5.imimg.com/data5/SELLER/Default/2023/4/299252831/MD/NJ/NB/99297565/transformer-bird-guard-shroud-250x250.jpg",
        productname: "Transformer Bird Guard Shroud"
    },
    {
        p1: "https://5.imimg.com/data5/SELLER/Default/2023/4/299567543/VF/KX/HK/99297565/cable-pvc-shroud-250x250.jpg",
        productname: "Cable PVC Shroud"
    },
    {
        p1: "https://5.imimg.com/data5/SELLER/Default/2023/4/299568054/IZ/OS/GH/99297565/gland-insulation-bushing-shroud-250x250.jpg",
        productname: "Gland Insulation Bushing Shroud"
    },
    {
        p1: "https://5.imimg.com/data5/SELLER/Default/2023/4/299575294/HZ/AO/RO/99297565/pvc-insulation-shroud-250x250.jpg",
        productname: "PVC Insulation Shroud"
    },
    {
        p1: "https://5.imimg.com/data5/SELLER/Default/2023/4/299346639/EJ/IB/RY/99297565/whatsapp-image-2023-04-10-at-15-40-20-250x250.jpeg",
        productname: "WhatsApp Image"
    }
];

const PowerProduct = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Add your slick initialization here if needed
    }, []);

    return (
     
           

            <main>
             <div className="pdproduct">
             <div className="power_product_area">
                    <div className="powerproduct">
                        <div className="product_items" id="product_items">
                            {products.map((item, index) => (
                                <div className="pd_list" key={index}>
                                    <div className="product_photo">
                                        <img src={item.p1} alt={item.productname} />
                                    </div>
                                    <div className="product_discription">
                                        <div className="pd_disci">
                                            <p>{item.productname}</p>
                                            <div className="get_quota">
                                                <a href="">Get Best Quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark_pd"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="product_application">
                    <h2>PRODUCT APPLICATION</h2>
                    <p>
                        We are actively engaged in design & solution of insulation shroud
                        for various industries. We are using high quality insulation material & in compliance with the defined
                        quality standards. We design customize solution & manufactured by our own unit at Jamnagar. That is the
                        reason at PURNA, the quest for quality begins long, because before production we ensure that the
                        highest-grade raw material goes into the making of insulation compound.
                    </p>
                    <p>
                        Bird guard type PURNA 1.2 & PURNA 1.2 CS has specially designed for
                        11kV & 22kV transformer. We have also passed Type Test high voltage test as per standard IEC 60502-02.
                        As per technical specification & to increase dielectric strength we used epoxy resin with Aluminum oxide
                        AI 2 O3 in the Polyvinyl chloride compound. Same insulation is also available in EPDM but for different
                        application.
                    </p>
                    <div className="application_photo">
                        <img src="https://static.wixstatic.com/media/0d3089_65159c484b5147738fb82033dcd28d1e~mv2.png/v1/fill/w_717,h_358,al_c,lg_1,q_85,usm_0.33_1.00_0.00,enc_auto/image.png" alt="Application" />
                    </div>
                    <div className="application_data">
                        <img src="https://static.wixstatic.com/media/0d3089_a6df51429fa3478981b6493a8ff08121~mv2.png/v1/fill/w_600,h_155,al_c,lg_1,q_85,usm_0.33_1.00_0.00,enc_auto/image.png" alt="Application Data" />
                    </div>
                </div>
             </div>
            </main>

       
      
    );
};

export default PowerProduct;
