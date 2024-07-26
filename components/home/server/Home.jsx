import Image from "next/image";

export default function Home() {
    return (
        <section className={"home"}>
            <div className={"container"}>
                <div className="home__banner">
                    <Image
                        src={"/services/hotels/movenpick.jpg"}
                        className={"hotels__content__image"}
                        alt={"image"}
                        height={500}
                        width={800}
                        quality={100}
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}