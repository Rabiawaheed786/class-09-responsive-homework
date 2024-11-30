import Image from "next/image"
const FeaturedProducts = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-center mb-20">
            <div className="md:w-5/12 w-full mb-20">
                <Image
                    src="/product1.png.png"
                    alt="Product one"
                    width={300}
                    height={150}
                />
                <p className="text-center pt-0 mr-10">PKR 6,000</p>
                <div className="flex justify-center items-center mr-16">

                    <button className="px-10 py-3 bg-red-300 text-black rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full mb-20">
                <Image
                    src="/product3.png.png"
                    alt="Product Three"
                    width={450}
                    height={450}
                />
                <p className="text-center pt-8 mr-10">PKR 3,000</p>
                <div className="flex justify-center items-center mr-10">

                    <button className="px-10 py-3 bg-red-300 text-black rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full">
                <Image
                    src="/product3.png.png"
                    alt="Product Three"
                    width={450}
                    height={450}
                />
                <p className="text-center pt-8 mr-10">PKR 5,000</p>
                <div className="flex justify-center items-center mr-10">

                    <button className="px-10 py-3 bg-red-300 text-black rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts;