import { Company } from "./Company";
import { Personnel } from "./Personnel";

export interface CompanyWithPersonnel {
  company: Company;
  personnels: Personnel[];
}
