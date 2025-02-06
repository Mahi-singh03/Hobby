import { Text, Heading } from "@react-email/components";

interface VerificationEmailProps {
  name: string;
  OTP: string;
}

export default function VarificationEmail({ name, OTP }: VerificationEmailProps) {
  return (
    <table
      align="center"
      border={0}
      cellPadding="0"
      cellSpacing="0"
      className="my-[16px] h-[424px] rounded-[12px] bg-blue-600"
      role="presentation"
      style={{
        // This url must be in quotes for Yahoo
        backgroundImage: "url('/static/my-image.png')",
        backgroundSize: "100% 100%",
      }}
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" className="p-[40px] text-center">
            <Text className="m-0 font-semibold text-gray-200">Hello {name}
            </Text>
            <Heading as="h1" className="m-0 mt-[4px] font-bold text-white">
              {OTP}
            </Heading>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-white">
              By Using this OTP you can verify your account
            </Text>
          
          </td>
        </tr>
      </tbody>
    </table>
  );
}
