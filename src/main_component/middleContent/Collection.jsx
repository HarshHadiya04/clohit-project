function Collection() {
    const collections = [
        {
            Image: '../../src/images/girl_2.jpg',
            Brand: 'KOTTY',
            Description: "KOTTY Women's Solid Relaxed Fit Full Sleeve Co-ord Blazer and Trouser Set.",
            Mrp: '3999',
            Price: '479'
        },
        {
            Image: '../../src/images/men_1.jpg',
            Brand: 'Van Heusen',
            Description: "Men's Solid Polo T Shirt",
            Mrp: '1099',
            Price: '599'
        },
        
        {
            Image: '../../src/images/men_3.jpg',
            Brand: 'CB-COLEBROOK',
            Description: "CB-COLEBROOK Men's Regular Fit Solid Soft Touch Cotton Casual Shirt with Pocket Design with Spread Collar & Full Sleeves",
            Mrp: '1849',
            Price: '495'
        },
        {
            Image: '../../src/images/men_4.jpg',
            Brand: 'EYEBOGLER',
            Description: "EYEBOGLER Men's Trendy Polo Neck Half Sleeves Regular Fit Checkered T-Shirt",
            Mrp: '1299',
            Price: '259'
        },
        {
            Image: '../../src/images/men_6.jpg',
            Brand: 'Urbano Fashion',
            Description: "Urbano Fashion Men's Loose Baggy Fit Cut and Sew Panelled Jeans Non-Stretchable",
            Mrp: '2299',
            Price: '789'
        },
        {
            Image: '../../src/images/men_7.jpg',
            Brand: 'Campus',
            Description: "Campus North Plus Sports Running Walking Gym Shoes for Men | Comfortable Shoes for Men with Vamp Upper for Airflow | Stylish Lace-Up Closure | Men's Shoes with Air Capsule Unit",
            Mrp: '1899',
            Price: '1101'
        },
        {
            Image: '../../src/images/girl_7.jpg',
            Brand: 'SPARX',
            Description: "Sparx Womens Sx0167l Running Shoe",
            Mrp: '820',
            Price: '1099'
        },
        {
            Image: '../../src/images/men_8.jpg',
            Brand: 'Kraasa',
            Description: "Kraasa Extra Soft Men's Classic Casual Sports Clogs/Sandals with Adjustable Back Strap for Adult | Comfortable & Lightweight| Stylish & Anti-Skid| Waterproof & Everyday Use Mules for Gents/Boys",
            Mrp: '1999',
            Price: '699'
        },
        {
            Image: '../../src/images/men_9.jpg',
            Brand: 'U.S. POLO ASSN.',
            Description: "Men's Regular Fit T-Shirt",
            Mrp: '799',
            Price: '559'
        },
        {
            Image: '../../src/images/men_10.jpg',
            Brand: 'London Hills',
            Description: "London Hills Men's Casual Printed Round Neck, Oversized Longline Drop Shoulder Boho Style T-Shirt",
            Mrp: '1299',
            Price: '249'
        },
        {
            Image: '../../src/images/girl_4.jpg',
            Brand: 'Leriya Fashion',
            Description: "Leriya Fashion Oversized Shirt for Women | Shirt for Women Stylish Western | Women Long Shirt",
            Mrp: '1999',
            Price: '419'
        },
        {
            Image: '../../src/images/girl_5.jpg',
            Brand: 'DIGITAL SHOPEE',
            Description: "DIGITAL SHOPEE Women's & Girls' Solid Side Split Hem Flare Leg Bell Bottom Pants Trouser",
            Mrp: '999',
            Price: '345'
        },
        {
            Image: '../../src/images/men_5.jpg',
            Brand: 'Lymio',
            Description: 'Lymio Men Jeans || Men Jeans Pants || Denim Jeans || Baggy Jeans for Men (Jeans-06-07-08)',
            Mrp: '4999',
            Price: '649'
        },
        {
            Image: '../../src/images/girl_6.jpg',
            Brand: 'Leriya Fashion',
            Description: "Leriya Fashion Women Dress | One Piece Dress for Women | Dresses for Women | Trendi Dress for Women | Dress",
            Mrp: '1999',
            Price: '418'
        },
       
        {
            Image: '../../src/images/girl_8.jpg',
            Brand: 'Campus',
            Description: "Campus Women's Claire Running Shoes",
            Mrp: '1399',
            Price: '840'
        },
        {
            Image: '../../src/images/girl_9.jpg',
            Brand: 'SIRIL',
            Description: "SIRIL Women's Bandhani Printed Chiffon Saree with Blouse",
            Mrp: '2150',
            Price: '473'
        },
        {
            Image: '../../src/images/girl_10.jpg',
            Brand: 'ANNI DESIGNER',
            Description: "ANNI DESIGNER Women's Cotton Blend Kurta with Palazzo",
            Mrp: '2599',
            Price: '439'
        },
        {
            Image: '../../src/images/men_2.jpg',
            Brand: 'Leriya Fashion',
            Description: 'Men Casual Half Sleeve Polo Oversized Fit T-Shirt',
            Mrp: '1999',
            Price: '380'
        },
        {
            Image: '../../src/images/girl_1.jpg',
            Brand: 'GoSriKi',
            Description: "GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Palazzo & Dupatta",
            Mrp: '2599',
            Price: '689'
        },
        {
            Image: '../../src/images/girl_3.jpg',
            Brand: 'Amazon Brand - Myx',
            Description: "Amazon Brand - Myx Women's Printed Straight Cotton Short Kurti",
            Mrp: '799',
            Price: '329'
        },
    ];
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {collections.map((item) => (
                    <div className="p-4 m-2" style={{ marginBottom: '20px', width: '350px', height: '500px' }}>
                        <img className="rounded" src={item.Image} alt={item.Description} style={{ width: '300px', height: '300px' }} />
                        <h4 style={{ textAlign: 'center' }}>{item.Brand}</h4>
                        <p style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: 2, // This limits the text to 2 lines
                            lineClamp: 2,
                            textAlignLast: 'center'
                        }}>{item.Description}</p>
                        <p>MRP: ₹{item.Mrp}</p>
                        <p>Price: ₹{item.Price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Collection;