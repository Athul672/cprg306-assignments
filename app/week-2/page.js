import React from "react";
import Link from "next/link";
import StudentInfo from" .\week-2\student-info.js";

export default function Home(){
    return (
        <div>
            <h1>CPRG306: Web Development 2 -Assignments</h1>
            <Link href={"/week-2"}>Go to week-2 Page</Link>
        </div>
    )
}