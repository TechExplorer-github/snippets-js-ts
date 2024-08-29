import { sampleCompanies } from "./data/sampleCompanies";
import { samplePersonnels } from "./data/samplePersonnels";
import { CompanyWithPersonnel } from "./interfaces/CompanyWithPersonnel";

console.log(sampleCompanies);
console.log(samplePersonnels);

const companyWithPersonnels: CompanyWithPersonnel[] = sampleCompanies.map(
  (company) => ({
    company,
    personnels: samplePersonnels.filter(
      (personnel) => personnel.companyId === company.id
    ),
  })
);

console.log(
  "Company with Personnel:",
  JSON.stringify(companyWithPersonnels, null, 2)
);
