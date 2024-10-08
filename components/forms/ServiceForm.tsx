import React from "react";
import { Input } from "../ui/input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { serviceValidation } from "@/lib/validation";
import { SelectGroup } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { addService } from "@/lib/actions/service.actions";
import { useRouter } from "next/navigation";

const ServiceForm = ({ NameService }: { NameService?: string }) => {
  let navigation= useRouter()
  let form = useForm<z.infer<typeof serviceValidation>>({
    resolver: zodResolver(serviceValidation),
    defaultValues: {
      mobile: "",
      name: "",
      salary: "",
      employer: "",
      provided_service_type: NameService || "",
      has_debts: "",
    },
  });
  async function onsubmit(data: z.infer<typeof serviceValidation>) {
    try {
      await addService({
        name: data.name,
        mobile: data.mobile,
        employer: data.employer,
        salary: +data.salary,
        provided_service_type: data.provided_service_type,
        has_debts: data.has_debts,
      });
      console.log("Service created successfully");
      form.reset();
      navigation.replace("/services")
    } catch (error) {
      console.log("Failed to create service:", error);
    }
  }
  return (
    <Form {...form}>
      <form
        className="simple_form p-6 pt-0 bg-gray-700 rounded overflow-scroll sm:shadow-2xl"
        onSubmit={form.handleSubmit(onsubmit)}>
        <h2 className="text-lg text-gray-300 text-center pt-10 pb-6">
          تمويلك العقاري علينا!
        </h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="  text-gray-300"> الاسم</FormLabel>
              <FormControl>
                <Input
                  placeholder={` الاسم`}
                  type="text"
                  className=" account-form_input"
                  name={field.name}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  value={field.value}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300"> رقم الجوال</FormLabel>
              <FormControl>
                <PhoneInput
                  className={`account-form_input px-2  w-full outline-none border rounded-lg h-10 relative transition-all `}
                  name={field.name}
                  disabled={field.disabled}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employer"
          render={({ field }) => (
            <FormItem>
              <Select
                name={field.name}
                disabled={field.disabled}
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <SelectTrigger className="w-full bg-gray-500 text-gray-300">
                  <SelectValue placeholder="جهة العمل" />
                </SelectTrigger>
                <SelectContent className="bg-gray-500 text-gray-300">
                  <SelectGroup>
                    <SelectLabel>جهة العمل</SelectLabel>
                    <SelectItem value="private_sector">قطاع خاص</SelectItem>
                    <SelectItem value="retired">متقاعد</SelectItem>
                    <SelectItem value="civilian">مدني</SelectItem>
                    <SelectItem value="military">عسكري</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className=" text-black"> الراتب</FormLabel> */}
              <FormControl>
                <Input
                  placeholder={` الراتب`}
                  type="text"
                  className=" account-form_input"
                  name={field.name}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  value={field.value}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="provided_service_type"
          render={({ field }) => (
            <FormItem>
              <Select
                name={field.name}
                disabled={field.disabled}
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <SelectTrigger className="w-full bg-gray-500 text-gray-300">
                  <SelectValue placeholder="نوع الخدمة المقدمة" />
                </SelectTrigger>
                <SelectContent className=" bg-gray-500 text-gray-300">
                  <SelectGroup>
                    <SelectLabel>نوع الخدمة المقدمة</SelectLabel>

                    <SelectItem value="purchase">شراء</SelectItem>
                    <SelectItem value="mortgage">رهن</SelectItem>
                    <SelectItem value="self_construction">بناء ذاتي</SelectItem>
                    <SelectItem value="co_applicant">تضامن</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="has_debts"
          render={({ field }) => (
            <FormItem>
              <Label className="radio_buttons required">
                هل يوجد عليك التزامات أو ديون؟
              </Label>
              <RadioGroup
                className="flex justify-end"
                onChange={(e: any) => {
                  field.onChange(e);
                }}
                name={field.name}
                onBlur={field.onBlur}
                ref={field.ref}
                disabled={field.disabled}
                defaultValue={field.value}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">نعم</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="option-two" />
                  <Label htmlFor="no">لا</Label>
                </div>
              </RadioGroup>
            </FormItem>
          )}
        />

        <Button type="submit" className="btn-blue w-full my-5">
          إرسال
        </Button>
        {/* <Link target="_blank" className="text-xs self-end" href="/terms_and_conditions">
                  سياسة الخصوصية
                </Link> */}
      </form>
    </Form>
  );
};

export default ServiceForm;
