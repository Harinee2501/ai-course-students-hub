import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const courseNames: Record<string, string> = {
  "ai-course": "Online Immersion Program",
  "ml-course": "India Immersion Program",
  "global-course": "Global Industry Exposure",
};

const PaymentPage = () => {
  const { course } = useParams<{ course: string }>();
  const [phone, setPhone] = useState("");
  const [upi, setUpi] = useState("");

  const displayName = courseNames[course || ""] || "Course";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Complete Your Payment</CardTitle>
              <div className="text-muted-foreground mb-4">Payment Gateway: Razorpay (Testing Phase)</div>
              <div className="text-lg font-semibold mb-2">{displayName}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="upi" className="block text-sm font-medium mb-1">UPI ID</label>
                <Input
                  id="upi"
                  type="text"
                  placeholder="Enter your UPI ID"
                  value={upi}
                  onChange={e => setUpi(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button className="w-full h-12 text-base mt-2">Pay with UPI</Button>
            </CardContent>
          </Card>
        </div>
        {/* Right Side */}
        <div className="flex-1 bg-muted flex flex-col items-center justify-center p-8 border-t md:border-t-0 md:border-l border-border">
          <img
            src="/placeholder.svg"
            alt="QR Code Placeholder"
            className="w-48 h-48 object-contain mb-4"
          />
          <div className="text-center text-muted-foreground text-sm">Scan this UPI code to pay securely</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 