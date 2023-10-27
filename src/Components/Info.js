import React from "react";
import InformationCard from "./InformationCard";
import { faStethoscope, faTruckMedical, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Who is Dr. Praksh</span>
        </h3>
        <p className="info-description">
        Dr. Prakash Bhatt is s a young and dynamic Neurologist in Bhavnagar. He completed his MD from Nazareth Hospital, Shillong, and his DNB in Neurology at Sahyadri Speciality Hospital. He manages Acute and Chronic Neurological Disorders, such as disorders of the Brain, Spine, Nerves and Muscles. Dr. Prakash is open-minded in his approach and utilises both traditional and non-traditional methods of care. Since beginning his practice, he has strived to go above and beyond, taking the time to get to the root of his patient’s problems to improve their quality of life.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Super Specialist"
          description="Neuropathy, General Neurological Diseases, Immunological and Movement Disorders, Multiple Sclerosis, Stroke, Metabolic, Head Injury, Headache, Neuro Infections, Epilepsy, Brain Hemorrhages & Stroke"
          icon={faUserDoctor}
        />

        <InformationCard
          title="General Treatment"
          description="OPD consultation for neurological disorders,
          Nerve Conduction Study (NCS),
          Electromyography (EMG),
          Headache Disorders,
          Epilepsy Treatment,
          Parkinson's Disease treatment,
          Dementia (Memory loss) treatment,
          Electroencephalography (EEG),
          Spinal Cord Disorders,
          Myasthenia Gravis treatment,
          Multiple Sclerosis diagnosis and treatment,
          Neuropathy and Myopathy diagnosis and treatment,
          Stroke ( Paralysis) treatment,
          Thrombolytic Therapy in stroke,
          Loss of balance or Vertigo"
          icon={faStethoscope}
        />
      </div>
    </div>
  );
}

export default Info;
