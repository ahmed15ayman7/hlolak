import { z } from "zod";

const serviceValidation = z.object({
  name: z.string().min(1, "الاسم مطلوب").max(100, "الاسم طويل جداً"),
  mobile: z
    .string()
    .min(1, "رقم الجوال مطلوب")
    .refine((val) => val.match(/^\+[1-9]{1}[0-9]{3,14}$/), {
      message: "رقم الجوال غير صالح",
    }),
  employer: z.string().nonempty("جهة العمل مطلوبة"),
  salary: z.string().min(1, "الراتب مطلوب"),

  provided_service_type: z.string().nonempty("نوع الخدمة المقدمة مطلوب"),
  has_debts: z.string().nonempty("الإجابة على هذا السؤال مطلوبة"),
});

export { serviceValidation };
