"use server";
import { connectDB } from '@/mongoose';
import Service from '../models/service.models';
import { FilterQuery, SortOrder } from 'mongoose';



interface AddServiceParams {
  name: string;
  mobile: string;
  employer: string;
  salary: number;
  provided_service_type: string;
  has_debts: string;
}

interface AssignEmployeeParams {
  serviceId: string;
  employeeId: string;
}

export const addService = async ({ name, mobile, employer, salary, provided_service_type, has_debts }: AddServiceParams) => {
  try {
    connectDB();
    const newService = new Service({
      name,
      mobile,
      employer,
      salary,
      provided_service_type,
      has_debts,
    });
    await newService.save();
    return newService;
  } catch (err) {
    console.error(err);
    console.error('Failed to create service!');
  }
};
export async function fetchAllServices({
  searchString = "",
  pageNum = 1,
  pageSize = 20,
  sortBy = "desc",
  userId
}: {
  searchString: string;
  userId: string;
  pageNum: number;
  pageSize: number;
  sortBy?: SortOrder;
}) {
  try {
    connectDB();
    let skipAmount = (pageNum - 1) * pageSize;
    let regex = new RegExp(searchString, "i");
    let query: FilterQuery<typeof Service> = { _id: { $ne:userId  } };
    if (searchString.trim() !== "") {
      query.$or = [
        { name: { $regex: regex } },
        { username: { $regex: regex } },
        { state: { $regex: regex } },
        { provided_service_type: { $regex: regex } },
        { step: { $regex: regex } },
      ];
    }
    let services = await Service.find(query)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(pageSize)
      .exec();
    const totalServices = await Service.countDocuments(query);
    let isNext = +totalServices > skipAmount + services.length;
    return {count:totalServices, services, isNext};
  } catch (error: any) {
    console.log(`not found user: ${error.message}`);
  }
}
export const getAllServices = async () => {
  try {
    await connectDB();
    const services = await Service.countDocuments();
    return services;
  } catch (err) {
    console.error(err);
    console.error('Failed to fetch services!');
  }
};
