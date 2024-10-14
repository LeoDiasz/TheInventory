import { View } from "react-native";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import React from "react";

const RegisterProduct = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid: isValidForm },
  } = useForm({ mode: "all" });

  return (
    <View>
      <form>
        <Input />
      </form>
    </View>
  );
};

export default RegisterProduct;
