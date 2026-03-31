"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { storeSession } from "@/lib/session";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const signUpSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

const forgotSchema = z.object({
  email: z.string().email(),
});

const resetSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine((values) => values.password === values.confirmPassword, {
  message: "Passwords must match.",
  path: ["confirmPassword"],
});

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-2 text-sm text-rose-500">{message}</p> : null;
}

export function SignInForm() {
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "demo@conversiqo.ai", password: "password123" },
  });

  const submit = handleSubmit(async (values) => {
    storeSession({
      email: values.email,
      name: "Demo User",
      company: "Northbridge Capital",
      loggedInAt: new Date().toISOString(),
    });
    setToast("Signed in to the Conversiqo AI demo workspace.");
    setTimeout(() => router.push("/dashboard"), 500);
  });

  return (
    <>
      <form className="space-y-5" onSubmit={submit}>
        <div>
          <Input {...register("email")} placeholder="demo@conversiqo.ai" />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Input {...register("password")} placeholder="password123" type="password" />
          <FieldError message={errors.password?.message} />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="flex-1" disabled={isSubmitting} type="submit" variant="primary">
            Sign In
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              storeSession({
                email: "demo@conversiqo.ai",
                name: "Demo User",
                company: "Northbridge Capital",
                loggedInAt: new Date().toISOString(),
              });
              router.push("/dashboard");
            }}
            type="button"
            variant="outline"
          >
            Continue with Demo
          </Button>
        </div>
        <div className="flex items-center justify-between text-sm">
          <Link className="text-slate-500 hover:text-slate-950" href="/forgot-password">
            Forgot password?
          </Link>
          <span className="text-slate-500">Demo credentials only</span>
        </div>
      </form>
      <Toast message={toast} />
    </>
  );
}

export function SignUpForm() {
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const submit = handleSubmit(async (values) => {
    storeSession({
      email: values.email,
      name: values.name,
      company: values.company,
      loggedInAt: new Date().toISOString(),
    });
    setToast("Account created. Moving into onboarding.");
    setTimeout(() => router.push("/onboarding"), 500);
  });

  return (
    <>
      <form className="space-y-5" onSubmit={submit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Input {...register("name")} placeholder="Your name" />
            <FieldError message={errors.name?.message} />
          </div>
          <div>
            <Input {...register("company")} placeholder="Company" />
            <FieldError message={errors.company?.message} />
          </div>
        </div>
        <div>
          <Input {...register("email")} placeholder="you@company.com" />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Input {...register("password")} placeholder="Create password" type="password" />
          <FieldError message={errors.password?.message} />
        </div>
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Create Account
        </Button>
      </form>
      <Toast message={toast} />
    </>
  );
}

export function ForgotPasswordForm() {
  const [toast, setToast] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
  });

  const submit = handleSubmit(async (values) => {
    setToast(`Password reset link sent to ${values.email}.`);
  });

  return (
    <>
      <form className="space-y-5" onSubmit={submit}>
        <div>
          <Input {...register("email")} placeholder="Email address" />
          <FieldError message={errors.email?.message} />
        </div>
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Send Reset Link
        </Button>
      </form>
      <Toast message={toast} />
    </>
  );
}

export function ResetPasswordForm() {
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
  });

  const submit = handleSubmit(async () => {
    setToast("Password updated. Redirecting to sign in.");
    setTimeout(() => router.push("/sign-in"), 500);
  });

  return (
    <>
      <form className="space-y-5" onSubmit={submit}>
        <div>
          <Input {...register("password")} placeholder="New password" type="password" />
          <FieldError message={errors.password?.message} />
        </div>
        <div>
          <Input {...register("confirmPassword")} placeholder="Confirm password" type="password" />
          <FieldError message={errors.confirmPassword?.message} />
        </div>
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Reset Password
        </Button>
      </form>
      <Toast message={toast} />
    </>
  );
}

export function IndustrySelect({ label }: { label: string }) {
  const options = useMemo(
    () => ["Healthcare", "Finance", "E-commerce", "Education", "Real Estate", "Government", "Enterprise IT"],
    [],
  );

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <Select defaultValue={options[0]}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
}
