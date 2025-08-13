import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import certificate1 from "../assets/home/certificate_1.png";
import certificate2 from "../assets/home/certificate_2.png";
import certificate3 from "../assets/home/certificate_3.png";
import certificate4 from "../assets/home/certificate_4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsCarousel = () => {
  const newsItems = [
    {
      image: certificate1,
      title: "Good Hygiene Practices (GHP)",
      context:
        "This certificate confirms that K.H.H. Company Limited has been assessed and found to be in accordance with the standard requirements for Good Hygiene Practices (GHP). The certification applies to the Processing of moisture and humidity control products including silica gels and powder desiccants.",
    },
    {
      image: certificate2,
      title: "KHH Company Limited – Officially Incorporated in Myanmar",
      context:
        "KHH Company Limited was officially incorporated under the Myanmar Companies Act 1914 on 22 November 2016 as a Private Company Limited by Shares. Registered with the Directorate of Investment and Company Administration (DICA), KHH is committed to delivering quality products and services with professionalism, trust, and innovation.",
    },
    {
      image: certificate3,
      title: "ISO 14001:2015 Certified – Environmental Management Excellence",
      context:
        "KHH Company Limited is proudly certified to ISO 14001:2015 for its Environmental Management System, covering the manufacturing of silica gels and powder desiccants. This certification reflects our commitment to sustainable practices, environmental responsibility, and delivering high-quality products while minimizing our ecological footprint in every stage of production.",
    },
    {
      image: certificate4,
      title: "Certificate of Registration - ISO 22000:2018",
      context:
        "This certificate confirms that K.H.H. Company Limited has been assessed and found to conform to the requirements of ISO 22000:2018. The certification covers the Processing of Humidity and Moisture Control Products (Silica Gels and Powder Desiccants) used in Food & Pharmaceutical Packaging (Category - I). This demonstrates the company's commitment to maintaining a robust Food Safety Management System.",
    },
  ];

  const AUTOPLAY_DELAY = 3000;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: true })]
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    onScroll(emblaApi);

    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onSelect, onScroll]);

  return (
    <section className="bg-white w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl">Awards & Certificates</h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous slide"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 border-l-accent text-gray-800 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft strokeWidth={1} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next slide"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 border-l-accent text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronRight strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {newsItems.map((item, index) => (
              <div
                className="flex-shrink-0 w-full md:w-1/2 min-w-0 pr-10"
                key={index}
              >
                <div className="group cursor-pointer flex flex-col sm:flex-row gap-8 items-stretch">
                  <div className="w-full sm:w-1/2 flex-shrink-0">
                    <img
                      src={item.image}
                      className="border border-zinc-200 w-full h-full object-contain"
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col justify-between ">
                    <p className="text-xl">{item.title}</p>
                    <p className="text-gray-800/80 text-sm">{item.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-0.5 bg-gray-100 mt-12">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
