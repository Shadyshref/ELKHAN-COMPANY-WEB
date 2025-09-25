// src/store/useProjectsStore.js
import { create } from 'zustand'

const useProjectsStore = create(() => ({
  projects: [
    {
      id: 1,
      tittle: 'Shell Out Car Service Center Al Salam',
      img: [
          '/images/Picture1.png.jpg',
          '/images/Picture1-1.jpg',
        '/images/Picture1-2.jpg',
      ],
      description: `An automotive industrial facility in Salam City, Cairo, covering 5,500 m².
Includes workshops, quick service, admin offices, parking, and spare parts storage.
Serves gas, electric, public transport, and light/medium-duty vehicles, in partnership with national companies.`,
    },
    {
      id: 2,
      tittle: 'Shinzo Abe Auto Service Center',
      img: [
        '/images/Picture2.png.jpg',
        '/images/Picture2.png.jpg',
        '/images/Picture2.png.jpg',
      ],
      description: `The project was commissioned by President Abdel Fattah El-Sisi as part of the development of the new Shinzo Abe traffic corridor.
It is a state-of-the-art automotive industrial facility offering full vehicle services.
The facility is owned by the National Roads Company and operated by Great Automotive.`,
    },
    {
      id: 3,
      tittle: 'Shell Out Car Service Center, Moharram Bek',
      img: [
          '/images/Picture3.png.jpg',
          '/images/Picture2.png.jpg',
          '/images/Picture2.png.jpg',
      ],

      description: `The project is a specialized automotive industrial facility located in Moharram Bey, Alexandria, covering 6,800 m².
It includes car showrooms, administrative offices, repair workshops, quick service areas, parking, and spare parts storage.
Developed and operated in partnership with the National Roads Company and Great Automotive`,
    },
    {
      id: 4,
      tittle: 'Aston Martin Service Center',
      img: ['/images/Picture4.png.jpg'],
      description: `The service center was established as part of Al Tarek Group’s strategy, the exclusive agent for Aston Martin in Egypt, to expand and engage more closely with the brand’s enthusiasts.
Designed to reflect Aston Martin’s global standards and identity, the center features world-class architecture and interiors.
Khan Company handled the architectural and interior design, as well as the full construction, finishing, and equipment installation.`,
    },
    {
      id: 5,
      tittle: 'AVIS Budget',
      img: ['/images/Picture5.png.jpg'],
      description: `One of the major companies specialized in the field of car financing`,
    },
    {
      id: 6,
      tittle: 'Mitsubishi Katameya Showroom',
      img: ['/images/Picture6.png.png'],
      description: `The project began in 2020 and is located in New Katameya, Cairo, with a showroom area of 400 m².
Scope of work included architectural design, execution drawings, interior décor, furniture, and full showroom setup to meet Mitsubishi’s global standards.
Also included were the exterior façade and all branding and signage works as per the Japanese company’s requirements.`,
    },
  ],
}))

export default useProjectsStore
