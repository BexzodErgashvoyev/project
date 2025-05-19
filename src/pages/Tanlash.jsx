import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Tanlash = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_604qjlf', 'template_0ehuabl', form.current, {
            publicKey: "CjRt7dXxmsVjkp0NK",
        }).then(() => {
            console.log('SUCCESS!');
            navigate("/products");
        }, (error) => {
            console.log('FAILED...', error);
            alert("Xatolik yuz berdi: " + error.text);
        });
    };

    const handlePostSingle = async () => {
        const res = await instance.get(`/products/${id}`);
        return res.data;
    };

    const { data: product, isLoading, err } = useQuery({
        queryKey: ["getSingleProduct", id],
        queryFn: handlePostSingle,
    });

    if (isLoading) return <h1 className="text-center text-lg font-semibold">Loading...</h1>;
    if (err) return <h1 className="text-center text-lg font-semibold text-red-500">{err.message}</h1>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8 flex-auto">
            <div key={product.id} className="rounded-lg p-6 max-w-lg transition-all duration-500 transform">
                <img
                    src={product.img}
                    alt={product.name}
                    className="h-96 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-105"
                />
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-lg mb-4">{product.price}</p>
                <p className="text-blue-600 font-bold text-xl">${product.decs}</p>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex w-72 flex-col gap-6">
                        <Input name="name" label="Ism va Familiya" />
                        <Input name="email" label="Email" />
                        <Input name="tel" label="Telefon raqam" />
                        <textarea name="message" placeholder="Xabar yozing" className="border p-2 rounded-md" />
                        <Button type="submit">Yuborish</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Tanlash;

