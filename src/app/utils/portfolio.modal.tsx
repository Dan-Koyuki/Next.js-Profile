'use client'
import React, { useEffect, useRef } from 'react'
import { PortfolioModel } from './project.portfolio';
import Link from 'next/link';

type PortfolioProps = {
  isClose: () => void;
  isOpen: boolean;
  project: PortfolioModel;
}

const ModalPortfolio = ({isOpen, isClose, project}: PortfolioProps) => {

  const modalRef = useRef<null | HTMLDialogElement>(null);
  
  useEffect(() => {
    if (isOpen){
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  });

  const close = () => {
    isClose();
    modalRef.current?.close();
  }

  return (
    <dialog
      ref={modalRef}
      className="font-Nunito fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50"
    >
      <div>
        <div className="flex flex-row items-center justify-between mb-4 pt-2 px-5 bg-yellow-400">
          <div>
            <h1 className="text-2xl">{project.name}</h1>
            <h4>{project.duration}</h4>
          </div>
          <button
            onClick={close}
            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
          >
            x
          </button>
        </div>
        <div className="flex flex-col py-1 px-4">
          <p>{project.description}</p>
        </div>
        <div className="flex flex-row justify-evenly mt-4 py-2 px-5 bg-yellow-400">
          {project.links ? (
            <div className="bg-green-500 p-2 rounded-xl text-white">
              {project.links.documentation ? (
                <Link href={project.links.documentation} target="_blank">
                  Docs
                </Link>
              ) : null}
            </div>
          ) : null}
          {project.links ? (
            <div className="bg-green-500 p-2 rounded-xl text-white">
              {project.links.demo ? (
                <Link href={project.links.demo} target="_blank">
                  Get Started!
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}

export default ModalPortfolio