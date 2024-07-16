"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSponsorship } from "@/redux/sponsorshipSlice";
import { addSelected, removeSelected } from '@/redux/flexibleSlice';
import { selectedWorldCafe } from '@/redux/worldCafeSlice';

import { toggleModal } from "@/redux/modalSlice";
import { ModalParams, iSellingPoint } from "@/types";
import { cn } from "@/lib/utils";
import {flexibleOfferContent} from "@/components/_content/_content"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check, Info } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";

import Modal from "./Modal";
import { sellingPointsExplanation } from "../_content/_content";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

import { offerContent } from "@/components/_content/_content";

const Offer = ({
  name,
  price,
  services,
  annotation,
  active,
  compulsory,
}: iSellingPoint) => {
  const dispatch = useDispatch();

  const handleTogglePacket = () => {
    if (!compulsory) {
      dispatch(toggleSponsorship({ name }));
    }
  };

  const handleModal = ({ name, modalData }: ModalParams) => {
    dispatch(toggleModal({ name, modalData }))
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
  };

  const selectedCheckboxes = useSelector((state: RootState) => state.selectedCheckboxes.selectedCheckboxes);
  


  return (
      <Card
        onClick={handleTogglePacket}
        className={cn(
          "flex flex-col relative max-w-2xl  border-2 transition-all bg-[#222227] cursor-pointer hover:bg-[#26262d] ",
          active && "border-red-700 dark:border-red-700"
        )}
      >
        <CardHeader className="min-h-[180px]">
          <CardTitle className="text-3xl font-light mb-3">{name}</CardTitle>
          <div className="text-[#bb002e] text-4xl font-bold "> {price}$</div>
          <CardDescription className="mt-3">
            {annotation}
          </CardDescription>

          <div className="absolute top-2 right-2 flex gap-2 items-center">


            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="p-1 "
                  onClick={() => {
                    handleModal({ name, modalData: sellingPointsExplanation.generalPartner as any });
                  }}
                >
                  <Info strokeWidth={1.5} className="hover:bg-gray-600 rounded-full transition" />
                </Button>
              </DialogTrigger>
              <Modal />
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 flex-1">
          {services.map((s, index) => (
            <div key={index} className="flex gap-2">
              <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
              <p key={index} className="text-md font-medium ">
                {s}
              </p>
            </div>
          ))}
        </CardContent>

      </Card>
     
     
  );

};

export default function Offers() {
  const sellingPoints = useSelector((state: RootState) => state.sponsorship);

  return (
    <motion.section initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center basis-[500px] justify-center px-6 gap-8"
      id="offers"
    >
      <h2 className={`text-3xl  md:text-5xl text-center`}>
        {offerContent.heading}
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {sellingPoints.map((sp) => {
          return <Offer key={sp.name} {...sp} />;
        })}
      </div>
      <p className={` text-lg md:text-2xl`}>
        
      </p>
    </motion.section>
  );
}
