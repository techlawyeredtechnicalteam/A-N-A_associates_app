//
import { FaHandshake } from "react-icons/fa";
import { MdOutlineGavel } from "react-icons/md";
import {
  RiScales3Line,
  RiBuildingLine,
  RiHomeLine,
  RiParentLine,
  RiTeamLine,
  RiFileList3Line
} from "react-icons/ri";

export const services = [
  {
    title: "Insolvency and Debt Recovery",
    description:
      "Comprehensive insolvency and debt recovery services with accredited practitioners. We help creditors, debtors, and financial institutions navigate financial distress, liquidation, and debt enforcement processes.",
    icon: <RiScales3Line className="w-8 h-8 text-black" />
  },
  {
    title: "Corporate and Commercial Practice",
    description:
      "Strategic legal advice for businesses at every stage. From company formation to governance, regulatory compliance, and commercial transactions tailored to your business objectives.",
    icon: <RiBuildingLine className="w-8 h-8 text-black" />
  },
  {
    title: "Arbitration and Alternative Dispute Resolution",
    description:
      "Efficient, cost-effective dispute resolution services. We represent clients in domestic and international arbitration, mediation, and conciliation processes.",
    icon: <FaHandshake className="w-8 h-8 text-black" />
  },
  {
    title: "Civil Litigation",
    description:
      "Strategic litigation services across all levels of Nigerian courts. We provide skilled advocacy and diligent representation with a focus on achieving favorable outcomes efficiently.",
    icon: <MdOutlineGavel className="w-8 h-8 text-black" />
  },
  {
    title: "Property Management and Real Estate Law",
    description:
      "Comprehensive real estate legal services covering property acquisition, title perfection, development advisory, and property management including tenant relations.",
    icon: <RiHomeLine className="w-8 h-8 text-black" />
  },
  {
    title: "Probate and Administration of Estate Law",
    description:
      "Expert legal support in estate administration and probate processes. We guide families through asset distribution, will execution, and estate planning with compassion and efficiency.",
    icon: <RiFileList3Line className="w-8 h-8 text-black" />
  },
  {
    title: "Family Law",
    description:
      "Sensitive and practical family law services protecting individual and family rights. We handle family-related matters with confidentiality and compassion while ensuring fair resolutions.",
    icon: <RiParentLine className="w-8 h-8 text-black" />
  },
  {
    title: "Employment and Labour Law",
    description:
      "Comprehensive employment law services for employers and employees. We help create compliant workplace structures, manage relationships, and resolve employment disputes effectively.",
    icon: <RiTeamLine className="w-8 h-8 text-black" />
  }
];
