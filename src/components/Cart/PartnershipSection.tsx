"use client";
import Providers from "@/redux/Providers";;
import Offers from "@/components/Cart/Offers";
import Cart from "@/components/Cart/Cart";
import { motion } from "framer-motion";
const Section = () => {


  return (
    <section className="flex justify-evenly flex-wrap">
      <Offers />
      <motion.div initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} className="flex items-start lg:flex-row flex-col gap-6">
        <Cart />
      </motion.div>
    </section>
  );
};

export default function PartnershipSection() {
  return (
    <Providers >
      <Section />
    </Providers>
  );
}
