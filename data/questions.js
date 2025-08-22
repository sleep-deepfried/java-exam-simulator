export const questionBank = [
  // Java SE 8 Programmer I Exam Questions - Complete 64 Question Bank

  // Question 11
  {
    id: 1,
    topic: "Inheritance",
    question: "Given the code fragment with CD and DVD classes, which code fragment should you use at line n1 to instantiate the dvd object successfully?",
    code: `class CD {
    int r;
    CD(int r) {
        this.r=r;
    }
}
class DVD extends CD {
    int c;
    DVD(int r, int c) {
        // line n1
    }
}
// And given the code fragment:
DVD dvd = new DVD(10, 20);`,
    options: [
      "super.r = r; this.c = c;",
      "super(r); this(c);",
      "super(r); this.c = c;",
      "this.c = r; super(c);"
    ],
    correct: 2,
    explanation: "A constructor in a subclass must call a constructor of its superclass as its first operation. The CD class has a constructor CD(int r). The DVD constructor must call it using super(r); to initialize the inherited r field. After the superclass constructor is called, the subclass can initialize its own fields, which is done with this.c = c;. Option B is incorrect because super() and this() cannot both be used in the same constructor."
  },

  // Question 12
  {
    id: 2,
    topic: "Package and Imports",
    question: "Given the code fragment from three files, which code fragment, when inserted at line 2, enables the code to compile?",
    code: `// SalesMan.java
package sales;
public class SalesMan { }

// Product.java
package sales.products;
public class Product { }

// Market.java
1. package market;
2. // insert code here
3. public class USMarket {
4.   SalesMan sm;
5.   Product p;
6. }`,
    options: [
      "import sales.*;",
      "import java.sales.products.*;",
      "import sales; import sales.products;",
      "import sales.*; import products.*;",
      "import sales.*; import sales.products.*;"
    ],
    correct: 4,
    explanation: "The USMarket class is in the market package. To use the SalesMan class, which is in the sales package, it needs to be imported. import sales.*; accomplishes this. To use the Product class, which is in the sales.products package, it also needs to be imported. import sales.products.*; accomplishes this. Importing a parent package (like sales.*) does not import its sub-packages (sales.products), so both imports are required."
  },

  // Question 13
  {
    id: 3,
    topic: "Object-Oriented Programming",
    question: "Which statement best describes encapsulation?",
    options: [
      "Encapsulation ensures that classes can be designed so that only certain fields and methods of an object are accessible from other objects",
      "Encapsulation ensures that classes can be designed so that their methods are inheritable",
      "Encapsulation ensures that classes can be designed with some fields and methods declared as abstract",
      "Encapsulation ensures that classes can be designed so that if a method has an argument MyType x, any subclass of MyType can be passed to that method"
    ],
    correct: 0,
    explanation: "Encapsulation is one of the fundamental principles of object-oriented programming. It refers to the bundling of data (attributes) and the methods that operate on the data into a single unit, or class. It also involves restricting direct access to some of an object's components, which is a key part of data hiding."
  },

  // Question 14
  {
    id: 4,
    topic: "Arrays",
    question: "Given the 2D array initialization, which code fragment prints red:blue:small:medium:?",
    code: `String shirts[][] = new String[2][2];
shirts[0][0] = "red";
shirts[0][1] = "blue";
shirts[1][0] = "small";
shirts[1][1] = "medium";`,
    options: [
      "for (int index = 1; index < 2; index++) { ... }",
      "for (int index = 0; index < 2; ++index) { for (int idx = 0; idx < index; ++idx) { ... } }",
      "for (String c : colors) { ... }",
      "for (int index = 0; index < 2;) { for (int idx = 0; idx < 2;) { System.out.print(shirts[index][idx] + \":\"); idx++; } index++; }"
    ],
    correct: 3,
    explanation: "To iterate through and print all elements of a 2x2 array in order, you need a nested loop where the outer loop iterates from 0 to 1 and the inner loop also iterates from 0 to 1. Option D correctly uses two nested loops that cover all indices from [0][0] to [1][1], printing each element followed by a colon."
  },

  // Question 15
  {
    id: 5,
    topic: "Methods and Encapsulation",
    question: "Given the CheckingAccount class, which three lines, when inserted independently at line n1, cause the program to print a 0 balance?",
    code: `// In another class
public static void main(String[] args) {
    CheckingAccount acct = new CheckingAccount((int)(Math.random()*1000));
    //line n1
    System.out.println(acct.getAmount());
}`,
    options: [
      "this.amount = 0;",
      "amount = 0;",
      "acct(0);",
      "acct.amount = 0;",
      "acct.getAmount() = 0;",
      "acct.changeAmount(0);",
      "acct.changeAmount(-acct.amount);",
      "acct.changeAmount(-acct.getAmount());"
    ],
    isMultipleChoice: true,
    correct: [3, 6, 7], // D, G, H
    explanation: "D works because the amount field is public, allowing direct modification. G works because the changeAmount(int x) method adds x to the current amount. By passing the negative of the current amount, the result is amount + (-amount), which is 0. H is functionally identical to G, as getAmount() returns the value of the amount field."
  },

  // Question 16
  {
    id: 6,
    topic: "Control Structures",
    question: "Given the following main method with isAvailable function, which modification enables the code to print 54321?",
    code: `3.  public static void main(String[] args) {
4.      int x = 5;
5.      while (isAvailable(x)) {
6.          System.out.print(x);
8.      }
9.  }
11. public static boolean isAvailable(int x) {
12.     return x-- > 0 ? true : false;
13. }`,
    options: [
      "Replace line 6 with System.out.print(--x);",
      "At line 7, insert x--;",
      "Replace line 6 with --x; and, at line 7, insert System.out.print(x);",
      "Replace line 12 With return (x > 0) ? false: true;"
    ],
    correct: 1,
    explanation: "The code as written has a fundamental flaw: the x in main is passed by value to isAvailable, so the x-- operation inside isAvailable does not affect the x in main. This results in an infinite loop that prints '5'. Inserting x--; at line 7 (after the print statement) is the correct logic: print the value, then decrement it for the next loop iteration."
  },

  // Question 17
  {
    id: 7,
    topic: "Exception Handling",
    question: "Given the code fragment, what is the result?",
    code: `public class Test{
    void readCard(int cardNo) throws Exception {
        System.out.println("Reading Card");
    }
    void checkCard(int cardNo) throws RuntimeException { // line n1
        System.out.println("Checking Card");
    }
    public static void main(String[] args) {
        Test ex = new Test();
        int cardNo = 12344;
        ex.checkCard(cardNo);   //line n2
        ex.readCard(cardNo);    //line n3
    }
}`,
    options: [
      "Reading Card Checking Card",
      "Compilation fails only at line n1.",
      "Compilation fails only at line n2.",
      "Compilation fails only at line n3."
    ],
    correct: 3,
    explanation: "checkCard is declared to throw RuntimeException. Since this is an unchecked exception, the compiler does not require the calling method (main) to handle it. So, line n2 compiles fine. readCard is declared to throw Exception. This is a checked exception. The compiler requires that any code calling this method must either catch the exception with a try-catch block or declare that it also throws the exception. Since main does neither for the call on line n3, a compilation error occurs at line n3."
  },

  // Question 18
  {
    id: 8,
    topic: "Control Structures",
    question: "Given the following main method with do-while loop, what is the result?",
    code: `public static void main(String[] args) {
    int num = 5;
    do {
        System.out.print(num-- + " ");
    } while (num == 0);
}`,
    options: [
      "5 4 3 2 1 0",
      "5 4 3 2 1",
      "4 2 1",
      "5"
    ],
    correct: 3,
    explanation: "A do-while loop always executes its body at least once. num starts at 5. The loop body executes, printing '5 ' (the post-decrement operator num-- means the original value is used for the print statement). After printing, num is decremented to 4. The condition while (num == 0) is checked. Since 4 == 0 is false, the loop terminates. The only output is '5 '."
  },

  // Question 19
  {
    id: 9,
    topic: "Control Structures",
    question: "Given the code fragment with boolean switch, which modification enables the code fragment to print TrueDone?",
    code: `4. public static void main(String[] args) {
5.     boolean opt = true;
6.     switch (opt) {
7.         case true:
8.             System.out.print("True");
9.             break;
10.        default:
11.            System.out.print("***");
12.    }
13.    System.out.println("Done");
14. }`,
    options: [
      "Replace line 5 With String result = \"true\"; Replace line 7 with case \"true\":",
      "Replace line 5 with boolean opt = 1; Replace line 7 with case 1:",
      "At line 9, remove the break statement.",
      "Remove the default section."
    ],
    correct: 0,
    explanation: "The switch statement in Java SE 8 cannot accept a boolean as its argument. The code will not compile as is. To make it work, the type of the variable opt must be changed to a type compatible with switch (such as String, int, char, etc.). Option A changes the variable to a String and the case label to a String literal. The switch will match \"true\", print \"True\", break, and then the final println will print \"Done\". This produces the desired output \"TrueDone\"."
  },

  // Question 20
  {
    id: 10,
    topic: "Arrays",
    question: "Given the jagged array code, what is the result?",
    code: `public class Test {
    public static void main(String[] args) {
        String[][] chs = new String[2][];
        chs[0] = new String[2];
        chs[1] = new String[5];
        int i = 97;

        for (int a = 0; a < chs.length; a++) {
            for (int b = 0; b < chs.length; b++) {
                chs[a][b] = "" + i;
                i++;
            }
        }

        for (String[] ca : chs) {
            for (String c : ca) {
                System.out.print(c + " ");
            }
            System.out.println();
        }
    }
}`,
    options: [
      "97 98 then on a new line 99 100 null null null",
      "97 98 then on a new line 99 100 101 102 103",
      "Compilation fails.",
      "A NullPointerException is thrown at runtime."
    ],
    correct: 0,
    explanation: "The first nested loop initializes the array. The inner loop's condition is b < chs.length, where chs.length is 2. This means it only iterates for b=0 and b=1, regardless of the actual length of the inner arrays. When a=0, it sets chs[0][0]='97' and chs[0][1]='98'. When a=1, it sets chs[1][0]='99' and chs[1][1]='100'. The elements chs[1][2], chs[1][3], and chs[1][4] are never initialized and remain null."
  },

  // Question 21
  {
    id: 11,
    topic: "Operators",
    question: "Given the code fragment with increment operators, what is the result?",
    code: `int x = 100;
int a = x++;
int b = ++x;
int c = x++;
int d = (a < b) ? (a < c) ? a : (b < c) ? b : c;
System.out.println(d);`,
    options: [
      "100",
      "101",
      "102",
      "103",
      "Compilation fails"
    ],
    correct: 0,
    explanation: "int x = 100; int a = x++; // Post-increment: a gets the original value of x. a is 100, x becomes 101. int b = ++x; // Pre-increment: x is incremented first. x becomes 102, b gets the new value. b is 102. int c = x++; // Post-increment: c gets the current value of x. c is 102, x becomes 103. At this point: a = 100, b = 102, c = 102. The ternary expression for d: (a < b) is (100 < 102), which is true. The expression simplifies to (a < c) ? a : (b < c) ? b : c. (a < c) is (100 < 102), which is true. The expression simplifies to a. d is assigned the value of a, which is 100."
  },

  // Question 22
  {
    id: 12,
    topic: "Collections",
    question: "Given the code fragment with ArrayList operations, what is the result?",
    code: `public static void main(String[] args) {
    List<String> names = new ArrayList<>();
    names.add("Robb");
    names.add("Bran");
    names.add("Rick");
    names.add("Bran");

    if (names.remove("Bran")) {
        names.remove("Jon");
    }
    System.out.println(names);
}`,
    options: [
      "[Robb, Rick, Bran]",
      "[Robb, Rick]",
      "[Robb, Bran, Rick, Bran]",
      "An exception is thrown at runtime."
    ],
    correct: 0,
    explanation: "The ArrayList names is initialized to [\"Robb\", \"Bran\", \"Rick\", \"Bran\"]. The if condition is names.remove(\"Bran\"). The remove(Object o) method removes the first occurrence of the specified element. The first \"Bran\" is removed from the list. The list becomes [\"Robb\", \"Rick\", \"Bran\"]. Because an element was successfully removed, the method returns true. The if block executes: names.remove(\"Jon\"). \"Jon\" is not in the list, so nothing is removed, and the method returns false (but the return value is not used). The final state of the list [\"Robb\", \"Rick\", \"Bran\"] is printed."
  },

  // Question 23
  {
    id: 13,
    topic: "Methods and Encapsulation",
    question: "Given the Employee class code fragment, which two modifications, when made independently, enable the code to print joe:true:100.0?",
    code: `public class Employee {
    String name;
    boolean contract;
    double salary;
    Employee() {
        //line n1
    }
    public String toString() {
        return name + ":" + contract + ":" + salary;
    }
    public static void main(String[] args) {
        Employee e = new Employee();
        //line n2
        System.out.print(e);
    }
}`,
    options: [
      "Replace line n2 with: e.name = \"Joe\"; e.contract = true; e.salary = 100;",
      "Replace line n2 with: this.name = \"Joe\"; this.contract = true; this.salary = 100;",
      "Replace line n1 with: this.name = new String(\"Joe\"); this.contract = new Boolean(true); this.salary = new Double(100);",
      "Replace line n1 with: name = \"Joe\"; contract = TRUE; salary = 100.0f;",
      "Replace line n1 with: this(\"Joe\", true, 100);"
    ],
    isMultipleChoice: true,
    correct: [0, 2], // A, C
    explanation: "Option A is a valid approach. After the object e is created using the default constructor, its instance variables can be set directly in the main method. This will result in the desired output. Option C is also a valid approach. It modifies the default constructor to initialize the instance variables with the desired values. When new Employee() is called in main, the object will be created with these values."
  },

  // Question 24
  {
    id: 14,
    topic: "Methods and Encapsulation",
    question: "Given the class with static and instance variables, what is the result?",
    code: `class X {
    static int i;
    int j;
    public static void main(String[] args) {
        X x1 = new X();
        X x2 = new X();
        x1.i = 3;
        x1.j = 4;
        x2.i = 5;
        x2.j = 6;
        System.out.println(
            x1.i + " " + x1.j + " " + x2.i + " " + x2.j);
    }
}`,
    options: [
      "3 4 5 6",
      "3 4 3 6",
      "5 4 5 6",
      "3 6 4 6"
    ],
    correct: 2,
    explanation: "static int i: The variable i is a class variable, shared among all instances of X. There is only one copy of i. int j: The variable j is an instance variable. Each object (x1, x2) has its own separate copy of j. x1.i = 3: The static variable i is set to 3. x1.j = 4: The instance variable j for object x1 is set to 4. x2.i = 5: The static variable i is changed to 5. This affects all references to i, including x1.i. x2.j = 6: The instance variable j for object x2 is set to 6. The println statement accesses the values: x1.i and x2.i both refer to the current value of the static variable i, which is 5. x1.j is 4, x2.j is 6. The output is \"5 4 5 6\"."
  },

  // Question 25
  {
    id: 15,
    topic: "Inheritance",
    question: "Given the inheritance chain, what is the result?",
    code: `class A {
    public A() { System.out.print("A "); }
}
class B extends A {
    public B() { System.out.print("B "); } //line n1
}
class C extends B {
    public C() { System.out.print("C "); } //line n2
    public static void main(String[] args) {
        C c = new C();
    }
}`,
    options: [
      "C B A",
      "C",
      "A B C",
      "Compilation fails at line n1 and line n2"
    ],
    correct: 2,
    explanation: "When a new object is created, the constructor of its class is called. If the constructor does not explicitly call a superclass constructor using super(...), the compiler inserts a call to the superclass's no-argument constructor super() as the very first statement. new C() is executed. The constructor C() is called. It implicitly calls super() first. The constructor for the superclass, B(), is called. It also implicitly calls super() first. The constructor for its superclass, A(), is called. It executes and prints 'A '. Control returns to the B() constructor, which then executes its body and prints 'B '. Control returns to the C() constructor, which then executes its body and prints 'C '. The final output is 'A B C'."
  },

  // Question 26
  {
    id: 16,
    topic: "Control Structures",
    question: "Given the code fragment with nested loops and break/continue, what is the result?",
    code: `public static void main(String[] args) {
    String[] arr = {"A", "B", "C", "D"};
    for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
        if (arr[i].equals("C")) {
            continue;
        }
        System.out.println("Work done");
        break;
    }
}`,
    options: [
      "A B C Work done",
      "A B C D Work done",
      "A Work done",
      "Compilation fails"
    ],
    correct: 2,
    explanation: "Iteration 1 (i = 0): arr[0] is \"A\". System.out.print(\"A \") executes. The if condition (\"A\".equals(\"C\")) is false. System.out.println(\"Work done\") executes. The break; statement is executed, which immediately terminates the for loop. The program ends. The final output is \"A Work done\"."
  },

  // Question 27
  {
    id: 17,
    topic: "Arrays",
    question: "Given the code fragment for array declaration, which code fragment, when inserted at line 3, enables the code to print 10:20?",
    code: `1. public class Test {
2.  public static void main(String[] args) {
3.      /* insert code here */
4.      array[0]=10;
5.      array[1]=20;
6.      System.out.print(array[0] + ":" + array[1]);
7.  }
8. }`,
    options: [
      "int[] array n= new int[2];",
      "int[] array; array = new int[2];",
      "int[] array = new int[2];",
      "int array [2];"
    ],
    correct: 2,
    explanation: "Before you can assign values to the elements of an array (array[0] = 10), the array variable must be declared and the array object itself must be created (instantiated) in memory. Option A declares a variable named n, not array, so array[0] would be a compiler error. Option B correctly declares and then instantiates the array in two steps. This is a valid way to do it. Option C correctly declares and instantiates the array in a single statement. This is the most common and concise way. Option D is not valid Java syntax for creating an array object."
  },

  // Question 28
  {
    id: 18,
    topic: "Java Basics",
    question: "Given the code from the Greeting.java file, which set of commands prints Hello Duke in the console?",
    code: `public class Greeting {
    public static void main(String[] args) {
        System.out.println("Hello " + args[0]);
    }
}`,
    options: [
      "javac Greeting then java Greeting Duke",
      "javac Greeting.java Duke then java Greeting",
      "javac Greeting.java then java Greeting Duke",
      "javac Greeting.java then java Greeting.class Duke"
    ],
    correct: 2,
    explanation: "Compilation: The Java source file (.java) must first be compiled into bytecode (.class). The command for the Java compiler is javac, and it takes the filename as an argument: javac Greeting.java. Execution: The compiled bytecode is then executed by the Java Virtual Machine (JVM). The command is java, followed by the name of the class containing the main method (without the .class extension). Any words following the class name are passed as command-line arguments to the args array. To print \"Hello Duke\", the string \"Duke\" must be passed as the first argument: java Greeting Duke."
  },

  // Question 29
  {
    id: 19,
    topic: "Exception Handling",
    question: "Which three are advantages of the Java exception mechanism?",
    options: [
      "Improves the program structure because the error handling code is separated from the normal program function",
      "Provides a set of standard exceptions that covers all the possible errors",
      "Improves the program structure because the programmer can choose where to handle exceptions",
      "Improves the program structure because exceptions must be handled in the method in which they occurred",
      "Allows the creation of new exceptions that are tailored to the particular program being created"
    ],
    isMultipleChoice: true,
    correct: [0, 2, 4], // A, C, E
    explanation: "A: A primary benefit of exceptions is that they allow you to separate the error-handling logic from the main program logic, making the code cleaner and easier to read. C: Java's exception handling is flexible. You can handle an exception immediately in a try-catch block, or you can propagate it up the call stack using the throws keyword, allowing a higher-level method to handle it. This choice is an advantage. E: Programmers can create their own custom exception classes (by extending Exception or RuntimeException) to represent specific errors in their application's domain, which makes error handling more precise and meaningful."
  },

  // Question 30
  {
    id: 20,
    topic: "Control Structures",
    question: "Given the code fragment with for loop, what is the result?",
    code: `public static void main(String[] args) {
    int ii = 0;
    int jj = 7;
    for (ii = 0; ii < jj - 1; ii = ii + 2) {
        System.out.print(ii + " ");
    }
}`,
    options: [
      "2 4",
      "0 2 4 6",
      "0 2 4",
      "Compilation fails"
    ],
    correct: 2,
    explanation: "The for loop initializes ii to 0. The loop condition is ii < jj - 1, which is ii < 6. The increment step is ii = ii + 2. Iteration 1: ii is 0. 0 < 6 is true. Print \"0 \". ii becomes 2. Iteration 2: ii is 2. 2 < 6 is true. Print \"2 \". ii becomes 4. Iteration 3: ii is 4. 4 < 6 is true. Print \"4 \". ii becomes 6. Iteration 4: ii is 6. 6 < 6 is false. The loop terminates. The final output is \"0 2 4 \"."
  },

  // Question 31
  {
    id: 21,
    topic: "Methods and Encapsulation",
    question: "Given the Alpha class with static and instance variables, what is the result?",
    code: `class Alpha {
    int ns;
    static int s;
    Alpha(int ns) {
        if (s < ns) {
            s = ns;
            this.ns = ns;
        }
    }
    void doPrint() {
        System.out.println("ns = " + ns + " s = " + s);
    }
}
public class TestA {
    public static void main(String[] args) {
        Alpha ref1 = new Alpha(50);
        Alpha ref2 = new Alpha(125);
        Alpha ref3 = new Alpha(100);
        ref1.doPrint();
        ref2.doPrint();
        ref3.doPrint();
    }
}`,
    options: [
      "ns = 50 s = 125, ns = 125 s = 125, ns = 100 s = 125",
      "ns = 50 s = 125, ns = 125 s = 125, ns = 0 s = 125",
      "ns = 50 s = 50, ns = 125 s = 125, ns = 100 s = 100",
      "ns = 50 s = 50, ns = 125 s = 125, ns = 0 s = 125"
    ],
    correct: 1,
    explanation: "s is a static variable, shared by all Alpha objects. ns is an instance variable. s is initialized to 0 by default. new Alpha(50): s (0) is less than ns (50). So, s becomes 50, and ref1.ns becomes 50. new Alpha(125): s (50) is less than ns (125). So, s becomes 125, and ref2.ns becomes 125. new Alpha(100): s (125) is NOT less than ns (100). The if block is skipped. ref3.ns remains at its default value of 0. The static s remains 125. ref1.doPrint(): Prints ref1.ns (50) and the current static s (125). -> ns = 50 s = 125. ref2.doPrint(): Prints ref2.ns (125) and the current static s (125). -> ns = 125 s = 125. ref3.doPrint(): Prints ref3.ns (0) and the current static s (125). -> ns = 0 s = 125."
  },

  // Question 32
  {
    id: 22,
    topic: "Java Core API",
    question: "Given the code fragment with StringBuilder reference equality, which code fragment, when inserted at line 9, enables the code to print true?",
    code: `7. StringBuilder sb1 = new StringBuilder("Duke");
8. String str1 = sb1.toString();
9. // insert code here
10. System.out.print(str1 == str2);`,
    options: [
      "String str2 = str1;",
      "String str2 = new String(str1);",
      "String str2 = sb1.toString();",
      "String str2 = \"Duke\";"
    ],
    correct: 0,
    explanation: "The code prints the result of str1 == str2. The == operator, when used with objects, checks if the two variables refer to the exact same object in memory (reference equality). String str2 = str1; makes str2 refer to the same String object that str1 refers to. Therefore, str1 == str2 will be true. new String(str1) creates a new, separate String object in memory, even though it has the same content as str1. str1 == str2 would be false. sb1.toString() creates a new String object each time it is called. So str1 and str2 would be different objects. str1 == str2 would be false."
  },

  // Question 33
  {
    id: 23,
    topic: "Date Time API",
    question: "Given the code fragment with LocalDate, assuming the system date is June 20, 2014, what is the result?",
    code: `LocalDate date1 = LocalDate.now();
LocalDate date2 = LocalDate.of(2014, 6, 20);
LocalDate date3 = LocalDate.parse("2014-06-20", DateTimeFormatter.ISO_DATE);
System.out.println("date1 = " + date1);
System.out.println("date2 = " + date2);
System.out.println("date3 = " + date3);`,
    options: [
      "date1 = 2014-06-20, date2 = 2014-06-20, date3 = 2014-06-20",
      "date1 = 06/20/2014, date2 = 2014-06-20, date3 = Jun 20, 2014",
      "Compilation fails.",
      "A DateTimeParseException is thrown at runtime."
    ],
    correct: 0,
    explanation: "LocalDate.now() returns the current system date, which is given as 2014-06-20. LocalDate.of(2014, 6, 20) creates a LocalDate for that specific date. LocalDate.parse(\"2014-06-20\", ...) parses the string into a LocalDate. The string \"2014-06-20\" is the standard ISO format for a local date. The toString() method of LocalDate (which is called by println) formats the date in the yyyy-MM-dd pattern. Therefore, all three objects represent the same date and will print in the same standard format."
  },

  // Question 34
  {
    id: 24,
    topic: "Operators",
    question: "Given the requirements for discount calculation, which two code fragments can be independently placed at line n1 to meet the requirements?",
    code: `public static void main(String[] args) {
    double discount = 0;
    int qty = Integer.parseInt(args[0]);
    // line n1
}

// Requirements:
// If qty >= 90, discount = 0.5
// If qty > 80 and qty < 90, discount = 0.2`,
    options: [
      "if (qty >= 90) { discount = 0.5; } if (qty > 80 && qty < 90) { discount = 0.2; }",
      "discount = (qty >= 90) ? 0.5 : 0; discount = (qty > 80) ? 0.2 : 0;",
      "discount = (qty >= 90) ? 0.5 : (qty > 80) ? 0.2 : 0;",
      "A nested if-else structure.",
      "discount = (qty > 80) ? 0.2 : (qty >= 90) ? 0.5 : 0;"
    ],
    isMultipleChoice: true,
    correct: [0, 2], // A, C
    explanation: "A: This uses two separate if statements. Since the conditions (>= 90 and > 80 && < 90) are mutually exclusive, this logic works correctly. C: This uses a nested ternary operator. It first checks if qty >= 90. If true, discount is 0.5. If false, it then checks if qty > 80. If that's true, discount is 0.2. If both are false, discount is 0. This correctly implements the logic."
  },

  // Question 35
  {
    id: 25,
    topic: "Methods and Encapsulation",
    question: "Given the Test class with static and instance variables, what is the result?",
    code: `public class Test {
    static int count = 0;
    int i = 0;
    public void changeCount() {
        while (i < 5) {
            i++;
            count++;
        }
    }
    public static void main(String[] args) {
        Test check1 = new Test();
        Test check2 = new Test();
        check1.changeCount();
        check2.changeCount();
        System.out.print(check1.count + " : " + check2.count);
    }
}`,
    options: [
      "10 : 10",
      "5 : 5",
      "5 : 10",
      "Compilation fails"
    ],
    correct: 0,
    explanation: "count is a static variable, so there is only one copy of it shared by all Test objects (check1 and check2). i is an instance variable, so check1 and check2 each have their own separate i. check1.changeCount() is called. Its local i goes from 0 to 5. The static count is incremented 5 times, so count becomes 5. check2.changeCount() is called. Its own local i goes from 0 to 5. The static count is incremented another 5 times. count goes from 5 to 10. The print statement accesses the static count through both check1 and check2. Since it's the same shared variable, both check1.count and check2.count refer to the final value, which is 10. The output is \"10 : 10\"."
  },

  // Question 36
  {
    id: 26,
    topic: "Object-Oriented Programming",
    question: "Which three statements describe the object-oriented features of the Java language?",
    options: [
      "Objects cannot be reused.",
      "A subclass can inherit from a superclass.",
      "Objects can share behaviors with other objects.",
      "A package must contain more than one class.",
      "Object is the root class of all other objects.",
      "A main method must be declared in every class."
    ],
    isMultipleChoice: true,
    correct: [1, 2, 4], // B, C, E
    explanation: "B: Inheritance is a core feature of OOP, allowing a subclass to inherit fields and methods from a superclass. C: This describes polymorphism and inheritance. Objects of different classes that share a common superclass or interface can be treated uniformly (sharing behavior). E: In Java, every class implicitly or explicitly extends the java.lang.Object class, making it the root of the class hierarchy."
  },

  // Question 37
  {
    id: 27,
    topic: "Control Structures",
    question: "Given the Test class with ternary operator, what is the result when running with 'java Test Hello'?",
    code: `public class Test {
    public static void main(String[] args) {
        if (args[0].equals("Hello") ? false : true) {
            System.out.println("Success");
        } else {
            System.out.println("Failure");
        }
    }
}`,
    options: [
      "Success",
      "Failure",
      "Compilation fails.",
      "An exception is thrown at runtime"
    ],
    correct: 1,
    explanation: "The command java Test Hello runs the program, passing \"Hello\" as the first command-line argument. So, args[0] is the string \"Hello\". The ternary operator in the if condition is evaluated: args[0].equals(\"Hello\") ? false : true. \"Hello\".equals(\"Hello\") is true. Because the condition is true, the ternary operator returns the first value, which is false. The if statement becomes if (false). The else block is executed, printing \"Failure\"."
  },

  // Question 38
  {
    id: 28,
    topic: "Java Core API",
    question: "You must ensure that the maskCC method returns a string that hides all digits of the credit card number except the last four. Which two code fragments should you use at line n1, independently, to achieve this requirement?",
    code: `public static String maskCC(String creditCard) {
    String x = "XXXX-XXXX-XXXX-";
    //line n1
}`,
    options: [
      "StringBuilder sb = new StringBuilder(creditCard); sb.substring(15, 19); return x + sb;",
      "return x + creditCard.substring(15, 19);",
      "StringBuilder sb = new StringBuilder(x); sb.append(creditCard, 15, 19); return sb.toString();",
      "StringBuilder sb = new StringBuilder(creditCard); ..."
    ],
    isMultipleChoice: true,
    correct: [1, 2], // B, C
    explanation: "The input creditCard is a string like \"1234-5678-9101-1121\". We need the last 4 digits, which are at indices 15 through 18. The substring(15, 19) method correctly extracts the characters from index 15 up to (but not including) index 19. B: creditCard.substring(15, 19) extracts \"1121\". This is concatenated with x to produce \"XXXX-XXXX-XXXX-1121\". This is a correct and concise solution. C: This creates a StringBuilder from x. Then, sb.append(creditCard, 15, 19) appends the specified substring of creditCard to the StringBuilder. The result is converted back to a string. This also works correctly."
  },

  // Question 39
  {
    id: 29,
    topic: "Arrays",
    question: "Given the following code with planets array, what is the output?",
    code: `public static void main(String[] args) {
    String[] planets = {"Mercury", "Venus", "Earth", "Mars"};
    System.out.println(planets.length);
    System.out.println(planets[1].length());
}`,
    options: [
      "4 4",
      "4 5",
      "4 6",
      "5 5"
    ],
    correct: 1,
    explanation: "planets.length: The .length property of an array gives the number of elements in it. The planets array has 4 elements. So, the first line prints 4. planets[1].length(): planets[1] refers to the second element of the array, which is the string \"Venus\". The .length() method of a String returns the number of characters in it. \"Venus\" has 5 characters. So, the second line prints 5. The output will be 4 on the first line and 5 on the second."
  },

  // Question 40
  {
    id: 30,
    topic: "Inheritance",
    question: "Given the three classes Base, DerivedA extends Base, and DerivedB extends DerivedA, what is the result?",
    code: `// in DerivedB.java
public static void main(String[] args) {
    Base b1 = new DerivedB();
    Base b2 = new DerivedA();
    Base b3 = new DerivedB();
    b1 = (Base) b3;
    Base b4 = (DerivedA) b3;
    b1.test();
    b4.test();
}`,
    options: [
      "Base DerivedA",
      "Base DerivedB",
      "DerivedB DerivedB",
      "DerivedB DerivedA"
    ],
    correct: 2,
    explanation: "Java uses dynamic method dispatch. The version of an overridden method that gets called is determined at runtime by the actual type of the object, not the type of the reference variable. b1 and b3 both refer to DerivedB objects. The line b1 = (Base) b3; is redundant but valid; b1 continues to refer to the same DerivedB object as b3. b4 is created by casting b3 (which points to a DerivedB object) to a DerivedA reference. This is a valid upcast since DerivedB is a subclass of DerivedA. b4 now also refers to the DerivedB object. b1.test(): b1 refers to a DerivedB object. The test() method from the DerivedB class is called, printing \"DerivedB \". b4.test(): b4 also refers to the same DerivedB object. The test() method from the DerivedB class is called, printing \"DerivedB \". The final output is \"DerivedB DerivedB \"."
  },

  // Question 41
  {
    id: 31,
    topic: "Methods and Encapsulation",
    question: "Given the Acc class in different packages, which statement is true?",
    code: `// Acc.java
package p1;
public class Acc {
    int p;              // default access
    private int q;
    protected int r;
    public int s;
}
// Test.java
package p2;
import p1.Acc;
public class Test extends Acc {
    public static void main(String[] args) {
        Acc obj = new Test();
        // Which variables are accessible by obj?
    }
}`,
    options: [
      "Both p and s are accessible by obj.",
      "Only s is accessible by obj.",
      "Both r and s are accessible by obj.",
      "p, r, and s are accessible by obj."
    ],
    correct: 1,
    explanation: "We are trying to access members of the Acc class from the Test class, which is in a different package (p2). p has default (package-private) access. It is only accessible within its own package (p1). It is not accessible from p2. q is private. It is only accessible within the Acc class itself. r is protected. It is accessible within its own package (p1) and to subclasses in other packages. However, when accessed via a reference of the superclass type (Acc obj), it is only accessible if the code is in the same package. The special rule for subclass access requires using a reference of the subclass type (Test). Therefore, obj.r is not accessible here. s is public. It is accessible from anywhere. Therefore, only s is accessible via the obj reference."
  },

  // Question 42
  {
    id: 32,
    topic: "Operators",
    question: "Given the code fragment with string concatenation, what is the result?",
    code: `System.out.println("5 + 2 = " + 3 + 4);
System.out.println("5 + 2 = " + (3 + 4));`,
    options: [
      "5 + 2 = 34, 5 + 2 = 34",
      "5 + 2 = 34, 5 + 2 = 7",
      "7 = 7, 7 + 7",
      "5 + 2 = 34, 5 + 2 = 7"
    ],
    correct: 1,
    explanation: "First line: \"5 + 2 = \" + 3 + 4. The + operator is evaluated from left to right. \"5 + 2 = \" + 3 results in string concatenation, producing the string \"5 + 2 = 3\". \"5 + 2 = 3\" + 4 is also string concatenation, producing \"5 + 2 = 34\". Second line: \"5 + 2 = \" + (3 + 4). The parentheses () cause the expression inside to be evaluated first. 3 + 4 results in integer addition, which is 7. The expression becomes \"5 + 2 = \" + 7. This is string concatenation, producing \"5 + 2 = 7\"."
  },

  // Question 43
  {
    id: 33,
    topic: "Exception Handling",
    question: "Given the code fragment with infinite loop and ArrayList, what is the result?",
    code: `public static void main(String[] args) {
    ArrayList myList = new ArrayList();
    String[] myArray;
    try {
        while (true) {
            myList.add("My String");
        }
    } catch (RuntimeException re) {
        System.out.println("Caught a RuntimeException");
    } catch (Exception e) {
        System.out.println("Caught an Exception");
    }
    System.out.println("Ready to use");
}`,
    options: [
      "Execution terminates in the first catch statement, and Caught a RuntimeException is printed to the console.",
      "Execution terminates in the second catch statement, and Caught an Exception is printed to the console.",
      "A runtime error is thrown in the thread \"main\".",
      "Execution completes normally, and Ready to use is printed to the console."
    ],
    correct: 2,
    explanation: "The while(true) loop will continuously add strings to the ArrayList. This will consume memory. Eventually, the Java Virtual Machine (JVM) will run out of heap space to allocate for the list and the strings. When this happens, it will throw an OutOfMemoryError. An Error (like OutOfMemoryError) is a subclass of Throwable but it is not a subclass of Exception. Therefore, the try-catch block, which is set up to catch RuntimeException and Exception, will not catch the OutOfMemoryError. The error will propagate up, uncaught, and terminate the \"main\" thread, printing the error's stack trace to the console."
  },

  // Question 44
  {
    id: 34,
    topic: "Arrays",
    question: "Given the code fragment with 2D array and break/continue, what is the result?",
    code: `public static void main(String[] args) {
    String[][] arr = {{"A", "B", "C"}, {"D", "E"}};
    for (int i = 0; i < arr.length; i++) {
        for (int j = 0; j < arr[i].length; j++) {
            System.out.print(arr[i][j] + " ");
            if (arr[i][j].equals("B")) {
                break;
            }
        }
        continue;
    }
}`,
    options: [
      "A B C",
      "A B C D E",
      "A B D E",
      "Compilation fails."
    ],
    correct: 2,
    explanation: "Outer loop (i=0): Inner loop (j=0): Prints \"A \". if is false. Inner loop (j=1): Prints \"B \". if is true. The break statement terminates the inner loop only. The continue statement is reached, which proceeds to the next iteration of the outer loop. Outer loop (i=1): Inner loop (j=0): Prints \"D \". if is false. Inner loop (j=1): Prints \"E \". if is false. Inner loop finishes. The continue is reached, and the outer loop finishes. The final output is \"A B D E \"."
  },

  // Question 45
  {
    id: 35,
    topic: "Lambdas",
    question: "Given the Person and Test classes with lambda expressions, which code fragment, when inserted at line n1, enables the code to print Hank?",
    code: `// in Test.java
public static void main(String[] args) {
    List<Person> iList = Arrays.asList(
        new Person("Hank", 45),
        new Person("Charlie", 40),
        new Person("Smith", 38));
    //line n1
}
public static void checkAge(List<Person> list, Predicate<Person> predicate) {
    for (Person p : list) {
        if (predicate.test(p)) {
            System.out.print(p.name + " ");
        }
    }
}`,
    options: [
      "checkAge(iList, () -> p.getAge() > 40);",
      "checkAge(iList, Person p -> p.getAge() > 40);",
      "checkAge(iList, p -> p.getAge() > 40);",
      "checkAge(iList, (Person p) -> { p.getAge() > 40; });"
    ],
    correct: 2,
    explanation: "The checkAge method expects a Predicate<Person>. A predicate is a functional interface with a single abstract method test(T t) that returns a boolean. A lambda expression can be used to implement this. The lambda needs to take one Person object as an argument and return true if its age is greater than 40. C: p -> p.getAge() > 40 is the correct lambda syntax. p is the parameter (its type Person is inferred by the compiler), and p.getAge() > 40 is the expression that returns a boolean. For Hank (age 45), this is true. For the others, it's false."
  },

  // Question 46
  {
    id: 36,
    topic: "Java Core API",
    question: "Given the App class with string comparison, which code fragment, when inserted at line n1, enables the App class to print Equal?",
    code: `public class App {
    public static void main(String[] args) {
        String str1 = "Java";
        String str2 = new String("java");
        //line n1
        {
            System.out.println("Equal");
        } else {
            System.out.println("Not Equal");
        }
    }
}`,
    options: [
      "String str3 = str2; if (str1 == str3)",
      "if (str1.equalsIgnoreCase(str2))",
      "String str3 = str2; if (str1.equals(str3))",
      "if (str1.toLowerCase() == str2.toLowerCase())"
    ],
    correct: 1,
    explanation: "We need to compare \"Java\" and \"java\" in a way that evaluates to true. B: str1.equalsIgnoreCase(str2) compares the two strings while ignoring case differences. \"Java\" and \"java\" are equal when case is ignored, so this is correct. A is incorrect because == checks for reference equality. str1 and str3 point to different objects. C is incorrect because .equals() is case-sensitive. \"Java\" is not equal to \"java\". D is incorrect. While toLowerCase() creates strings that have equal content, the == operator compares the object references. The toLowerCase() method returns new string objects, so their references will be different."
  },

  // Question 47
  {
    id: 37,
    topic: "Java Core API",
    question: "Given the code fragment with String trim method, what is the result?",
    code: `public static void main(String[] args) {
    String str = " ";
    str.trim();
    System.out.println(str.equals("") + " " + str.isEmpty());
}`,
    options: [
      "true true",
      "true false",
      "false false",
      "false true"
    ],
    correct: 2,
    explanation: "Strings in Java are immutable. The line str.trim(); creates a new, empty string \"\" as its result, but this result is not assigned back to the str variable. The str variable continues to refer to the original string, which contains a single space: \" \". str.equals(\"\"): \" \".equals(\"\") is false. str.isEmpty(): The string \" \" is not empty (it has a length of 1). This method returns false. The final output is \"false false\"."
  },

  // Question 48
  {
    id: 38,
    topic: "Arrays",
    question: "Given the code fragment with String array initialization, what is the result?",
    code: `String[] strs = new String[2];
int idx = 0;
for (String s : strs) {
    strs[idx].concat(" element " + idx);
    idx++;
}
for (idx = 0; idx < strs.length; idx++) {
    System.out.println(strs[idx]);
}`,
    options: [
      "Element 0, Element 1",
      "Null element 0, Null element 1",
      "Null, Null",
      "A NullPointerException is thrown at runtime."
    ],
    correct: 3,
    explanation: "String[] strs = new String[2]; creates an array of two String references. By default, these references are initialized to null. So, strs[0] is null and strs[1] is null. The first loop begins. Iteration 1: idx is 0. The code attempts to execute strs[0].concat(...). Since strs[0] is null, trying to call a method on it throws a NullPointerException. The program terminates immediately."
  },

  // Question 49
  {
    id: 39,
    topic: "Methods and Encapsulation",
    question: "Given the SumTest class with method overloading, what is the result?",
    code: `public class SumTest {
    public static void doSum(Integer x, Integer y) { System.out.println("Integer sum is " + (x + y)); }
    public static void doSum(double x, double y) { System.out.println("double sum is " + (x + y)); }
    public static void doSum(float x, float y) { System.out.println("float sum is " + (x + y)); }
    public static void doSum(int x, int y) { System.out.println("int sum is " + (x + y)); }
    public static void main(String[] args) {
        doSum(10, 20);
        doSum(10.0, 20.0);
    }
}`,
    options: [
      "int sum is 30, float sum is 30.0",
      "int sum is 30, double sum is 30.0",
      "Integer sum is 30, double sum is 30.0",
      "Integer sum is 30, float sum is 30.0"
    ],
    correct: 1,
    explanation: "This question tests method overloading resolution. doSum(10, 20): The arguments 10 and 20 are int literals. The compiler looks for a matching method signature. There is an exact match: doSum(int x, int y). This method is chosen and executed, printing \"int sum is 30\". doSum(10.0, 20.0): The arguments 10.0 and 20.0 are double literals. The compiler finds an exact match: doSum(double x, double y). This method is chosen, and it prints \"double sum is 30.0\" (or 30, depending on formatting). The compiler prefers primitive types over their wrapper classes (int over Integer) and does not perform narrowing conversions (double to float) if a wider or exact match is available."
  },

  // Question 50
  {
    id: 40,
    topic: "Java Core API",
    question: "Given the definitions of the MyString class and the Test class, what is the result?",
    code: `//MyString.java in package p1
class MyString {
    String msg;
    MyString(String msg) { this.msg = msg; }
}
//Test.java in package p1
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello " + new StringBuilder("Java SE 8"));
        System.out.println("Hello " + new MyString("Java SE 8"));
    }
}`,
    options: [
      "Hello Java SE 8, Hello Java SE 8",
      "Hello java.lang.StringBuilder@..., Hello p1.MyString@...",
      "Hello Java SE 8, Hello p1.MyString@...",
      "Compilation fails."
    ],
    correct: 2,
    explanation: "When an object is concatenated with a string (using +), Java calls the object's toString() method to get its string representation. new StringBuilder(...): The StringBuilder class has an overridden toString() method that returns the character sequence it contains. So, this evaluates to the string \"Java SE 8\". The first line prints \"Hello Java SE 8\". new MyString(...): The MyString class does not override the toString() method. Therefore, it inherits the default toString() method from the java.lang.Object class. This default method returns a string consisting of the class name, an \"@\" symbol, and the object's hash code in hexadecimal format (e.g., p1.MyString@15db9742). The second line will print something like \"Hello p1.MyString@...\"."
  },

  // Question 51
  {
    id: 41,
    topic: "Inheritance",
    question: "Given the Vehicle and Car classes with constructor calls, what is the result?",
    code: `class Vehicle {
    int x;
    Vehicle() { this(10); } // line n1
    Vehicle(int x) { this.x = x; }
}
class Car extends Vehicle {
    int y;
    Car() {
        super();
        this(20); // line n2
    }
    Car(int y) { this.y = y; }
    public String toString() { return super.x + ":" + this.y; }
}
// And given:
Vehicle y = new Car();
System.out.println(y);`,
    options: [
      "10:20",
      "0:20",
      "Compilation fails at line n1",
      "Compilation fails at line n2"
    ],
    correct: 3,
    explanation: "In a constructor, the call to another constructor in the same class (this(...)) or a superclass constructor (super(...)) must be the very first statement. In the Car() constructor, both super(); and this(20); are present. A constructor can only have one or the other, and it must be the first line. Having both is a compilation error. Therefore, the code fails to compile at line n2."
  },

  // Question 52
  {
    id: 42,
    topic: "Java Basics",
    question: "Given the MainTest class with overloaded main methods, what is the result when running 'java MainTest 1 2 3'?",
    code: `public class MainTest {
    public static void main(int[] args) { System.out.println("int main " + args[0]); }
    public static void main(Object[] args) { System.out.println("Object main " + args[0]); }
    public static void main(String[] args) { System.out.println("String main " + args[0]); }
}`,
    options: [
      "int main 1",
      "Object main 1",
      "String main 1",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    correct: 2,
    explanation: "When you run a Java application from the command line, the JVM specifically looks for a method with the exact signature public static void main(String[] args). This is the designated entry point for the application. The command java MainTest 1 2 3 invokes this specific main method. The arguments \"1\", \"2\", and \"3\" are passed as an array of String objects. The code inside this method will then print \"String main \" followed by args[0], which is \"1\"."
  },

  // Question 53
  {
    id: 43,
    topic: "Working with Data Types",
    question: "Given the code fragment with numeric type assignments, which three lines fail to compile?",
    code: `3. public static void main(String[] args) {
4.   int iVar = 100;
5.   float fVar = 100.100f;
6.   double dVar = 123;
7.   iVar = fVar;
8.   fVar = iVar;
9.   dVar = fVar;
10.  fVar = dVar;
11.  dVar = iVar;
12.  iVar = dVar;
13. }`,
    options: [
      "Line 7",
      "Line 8",
      "Line 9",
      "Line 10",
      "Line 11",
      "Line 12"
    ],
    isMultipleChoice: true,
    correct: [0, 3, 5], // A, D, F - Lines 7, 10, 12
    explanation: "This question tests implicit numeric type conversions (widening vs. narrowing). Widening (safe, implicit): Assigning a value from a smaller-range type to a larger-range type (e.g., int to float, float to double). Narrowing (unsafe, requires explicit cast): Assigning from a larger-range type to a smaller-range type (e.g., double to float, float to int). Line 7: iVar = fVar; - Fails. Assigning a float to an int is a narrowing conversion and could lose the fractional part. Requires an explicit cast: iVar = (int) fVar;. Line 10: fVar = dVar; - Fails. Assigning a double to a float is a narrowing conversion and could lose precision. Requires an explicit cast: fVar = (float) dVar;. Line 12: iVar = dVar; - Fails. Assigning a double to an int is a narrowing conversion. Requires an explicit cast: iVar = (int) dVar;."
  },

  // Question 54
  {
    id: 44,
    topic: "Inheritance",
    question: "Given the Person class with constructor chaining, what is the result?",
    code: `public class Person {
    String name;
    int age = 25;
    public Person(String name) { // constructor 1
        this();       //line n1
        setName(name);
    }
    public Person(String name, int age) { // constructor 2
        Person(name); //line n2
        setAge(age);
    }
    //... setters and getters, show method ...
}`,
    options: [
      "Jesse 25, Walter 52",
      "Compilation fails only at line n1",
      "Compilation fails only at line n2",
      "Compilation fails at both line n1 and line n2"
    ],
    correct: 3,
    explanation: "Line n1: this(); This is a call to another constructor within the same class. Since there is no no-argument constructor Person() defined, this line will cause a compilation error. Line n2: Person(name); This is not the correct syntax to call another constructor. To call another constructor from within a constructor, you must use this(...). The correct syntax would be this(name);. As written, the compiler interprets Person(name) as an attempt to declare a method named Person, which is invalid syntax here. This also causes a compilation error. Since both lines contain compilation errors, the code fails to compile."
  },

  // Question 55
  {
    id: 45,
    topic: "Arrays",
    question: "Given the 2D array initialization code, which option represents the state of the num array after successful completion of the outer loop?",
    code: `int num[][] = new int[1][3];
for (int i = 0; i < num.length; i++) {
    for (int j = 0; j < num[i].length; j++) {
        num[i][j] = 10;
    }
}`,
    options: [
      "num[0][0]=10, num[0][1]=10, num[0][2]=10",
      "num[0][0]=10, num[1][0]=10, num[2][0]=10",
      "num[0][0]=10, num[0][1]=0, num[0][2]=0",
      "num[0][0]=10, ... num[1][0]=0, ..."
    ],
    correct: 0,
    explanation: "int num[][] = new int[1][3]; creates a 2D array with 1 row and 3 columns. The outer loop runs for i = 0 (since num.length is 1). The inner loop runs for j = 0, j = 1, and j = 2 (since num[0].length is 3). In each iteration of the inner loop, the corresponding element is set to 10. This results in num[0][0] = 10, num[0][1] = 10, and num[0][2] = 10."
  },

  // Question 56
  {
    id: 46,
    topic: "Arrays",
    question: "Given the following array, which two code fragments, independently, print each element in this array?",
    code: `int[] intArr = {8, 16, 32, 64, 128};`,
    options: [
      "for (int i : intArr) { System.out.print(intArr[i] + \" \"); }",
      "for (int i : intArr) { System.out.print(i + \" \"); }",
      "for (int i=0 : intArr) { ... }",
      "for (int i=0; i < intArr.length; i++) { System.out.print(i + \" \"); }",
      "for (int i=0; i < intArr.length; i++) { System.out.print(intArr[i] + \" \"); }",
      "for (int i; ... ) { ... }"
    ],
    isMultipleChoice: true,
    correct: [1, 4], // B, E
    explanation: "B: The enhanced for loop (for-each loop). for (int i : intArr) iterates through the array, and in each iteration, the variable i holds the value of the element (8, then 16, then 32, etc.). Printing i correctly prints the element's value. E: The standard index-based for loop. for (int i=0; i < intArr.length; i++) iterates using an index i from 0 to the end of the array. intArr[i] correctly accesses the element at that index. A is incorrect because in an enhanced for loop, i is the value, not the index. intArr[i] would try to access indices 8, 16, 32, etc., causing an ArrayIndexOutOfBoundsException. D is incorrect because it prints the index i, not the element's value intArr[i]."
  },

  // Question 57
  {
    id: 47,
    topic: "Arrays",
    question: "Given the Planet class and the main method, what is the output?",
    code: `// ... Planet class ...
public static void main(String[] args) {
    Planet[] planets = { ... };
    System.out.println(planets);
    System.out.println(planets[2]);
    System.out.println(planets[2].moons);
}`,
    options: [
      "planets, Earth, 1",
      "[LPlanets.Planet;@..., Earth, 1",
      "[LPlanets.Planet;@..., Planets.Planet@..., 1",
      "..."
    ],
    correct: 2,
    explanation: "System.out.println(planets): planets is an array object. When an array is printed directly, it calls the default toString method, which produces a string representing the object's type and memory address (e.g., [LPlanets.Planet;@15db9742). [L indicates an array of objects. System.out.println(planets[2]): planets[2] is the third element, a Planet object (new Planet(\"Earth\", 1)). The Planet class does not override toString(), so the default Object.toString() is used, which again prints the class name and hash code (e.g., Planets.Planet@6d06d69c). System.out.println(planets[2].moons): This accesses the moons field of the third Planet object. This field was initialized to 1. This will print the integer 1."
  },

  // Question 58
  {
    id: 48,
    topic: "Control Structures",
    question: "Given the requirements for processing an array, which two statements are true?",
    code: `int[] array = {1, 2, 3, 4, 5};

// Requirements:
// 1. Process all elements in order of entry.
// 2. Process all elements in reverse order of entry.
// 3. Process alternating elements of the array.`,
    options: [
      "Requirements 1, 2, and 3 can be implemented by using the enhanced for loop.",
      "Requirements 1, 2, and 3 can be implemented by using the standard for loop.",
      "Requirements 2 and 3 CANNOT be implemented by using the standard for loop.",
      "Requirement 1 can be implemented by using the enhanced for loop.",
      "Requirement 3 CANNOT be implemented by using either the enhanced for loop or the standard for loop."
    ],
    isMultipleChoice: true,
    correct: [1, 3], // B, D
    explanation: "Standard for loop (index-based): This loop gives you full control over the index (for (int i=...;...;...)). You can make it go forward (Requirement 1), backward (i--, Requirement 2), or skip elements (i+=2, Requirement 3). Therefore, statement B is true. Enhanced for loop (for-each): This loop is simpler but less flexible. It always iterates through all elements from start to finish, in order. It does not provide access to the index and cannot be made to go backward or skip elements. Therefore, it can only satisfy Requirement 1. This makes statement D true."
  },

  // Question 59
  {
    id: 49,
    topic: "Java Basics",
    question: "Given the content of three files, which statement is true?",
    code: `// A.java
public class A {
    public void a() {}
    int a;
}
// B.java
public class B {
    private int doStuff() {
        private int x = 100;
        return x++;
    }
}
// C.java
import java.io.*;
package p1;
class A {
    public void main(String fileName) throws IOException { }
}`,
    options: [
      "Only the A.java file compiles successfully.",
      "Only the B.java file compiles successfully.",
      "Only the C.java file compiles successfully.",
      "The A.java and B.java files compile successfully.",
      "The B.java and C.java files compile successfully.",
      "The A.Java and C.java files compile successfully."
    ],
    correct: 0,
    explanation: "A.java: This is a valid class declaration. A public class with a method and a field. It compiles successfully. B.java: private int x = 100; inside a method is a syntax error. Local variables inside a method cannot have access modifiers like private. This file will fail to compile. C.java: The package p1; statement must be the very first statement in the file, before any import statements. This file will fail to compile. Therefore, only A.java compiles successfully."
  },

  // Question 60
  {
    id: 50,
    topic: "Inheritance",
    question: "Given the class declarations with generics, which answer fails to compile?",
    code: `public abstract class Animal
public interface Hunter
public class Cat extends Animal implements Hunter
public class Tiger extends Cat`,
    options: [
      "ArrayList<Animal> myList = new ArrayList<>(); myList.add(new Tiger());",
      "ArrayList<Hunter> myList = new ArrayList<>(); myList.add(new Cat());",
      "ArrayList<Hunter> myList = new ArrayList<>(); myList.add(new Tiger());",
      "ArrayList<Tiger> myList = new ArrayList<>(); myList.add(new Cat());",
      "ArrayList<Animal> myList = new ArrayList<>(); myList.add(new Cat());"
    ],
    correct: 3,
    explanation: "This question tests generics and polymorphism. You can add an object of type T or any subtype of T to an ArrayList<T>. A: Tiger is a subclass of Cat, which is a subclass of Animal. So a Tiger is an Animal. Compiles. B: Cat implements Hunter. So a Cat is a Hunter. Compiles. C: Tiger is a subclass of Cat, which implements Hunter. So a Tiger is a Hunter. Compiles. D: The list is of type Tiger (ArrayList<Tiger>). A Cat is a superclass of Tiger, not a Tiger itself. You cannot add a more general type (a superclass) to a more specific list. Fails to compile. E: Cat is a subclass of Animal. So a Cat is an Animal. Compiles."
  },

  // Question 61
  {
    id: 51,
    topic: "Methods and Encapsulation",
    question: "Given the TestScope class, what is the result?",
    code: `public class TestScope {
    public static void main(String[] args) {
        int var1 = 200;
        System.out.print(doCalc(var1));
        System.out.print(" " + var1);
    }
    static int doCalc(int var1) {
        var1 = var1 * 2;
        return var1;
    }
}`,
    options: [
      "400 200",
      "200 200",
      "400 400",
      "Compilation fails."
    ],
    correct: 0,
    explanation: "Java passes primitive types (like int) by value. In main, var1 is initialized to 200. doCalc(var1) is called. A copy of the value of var1 (200) is passed to the method. Inside doCalc, its local parameter var1 is changed to 200 * 2 = 400. The method returns this new value, 400. The first print statement prints the returned value: \"400\". The modification to the parameter inside doCalc has no effect on the original var1 variable in main. The second print statement prints the value of main's var1, which is still 200. The final output is \"400 200\"."
  },

  // Question 62
  {
    id: 52,
    topic: "Methods and Encapsulation",
    question: "Given the MarkList class, how many MarkList instances are created in memory at runtime?",
    code: `public class MarkList {
    int num;
    public static void graceMarks(MarkList obj4) { obj4.num += 10; }
    public static void main(String[] args) {
        MarkList obj1 = new MarkList();
        MarkList obj2 = obj1;
        MarkList obj3 = null;
        obj2.num = 60;
        graceMarks(obj2);
    }
}`,
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correct: 0,
    explanation: "An instance (or object) is created only when the new keyword is used. MarkList obj1 = new MarkList(); This line creates one instance of the MarkList class. MarkList obj2 = obj1; This does not create a new instance. It creates a new reference variable, obj2, that points to the same instance that obj1 points to. MarkList obj3 = null; This creates a reference variable but initializes it to null, meaning it doesn't point to any object. No instance is created. In total, only one MarkList object is created."
  },

  // Question 63
  {
    id: 53,
    topic: "Java Basics",
    question: "Which statement is true about Java byte code?",
    options: [
      "It can run on any platform.",
      "It can run on any platform only if it was compiled for that platform.",
      "It can run on any platform that has the Java Runtime Environment.",
      "It can run on any platform that has a Java compiler."
    ],
    correct: 2,
    explanation: "Java's slogan is \"Write Once, Run Anywhere.\" This is achieved through a two-step process: Java source code (.java) is compiled into an intermediate, platform-independent format called bytecode (.class). This bytecode can then be run on any machine, regardless of its underlying operating system or hardware, as long as that machine has a compatible Java Virtual Machine (JVM). The JVM is part of the Java Runtime Environment (JRE). The JRE interprets the bytecode and translates it into native machine instructions for that specific platform. A compiler is only needed to create the bytecode, not to run it."
  },

  // Question 64
  {
    id: 54,
    topic: "Control Structures",
    question: "Given the code fragment with switch statement, which three code fragments can be independently inserted at line n1 to enable the code to print One?",
    code: `public class Test {
    public static void main(String[] args) {
        //line n1
        switch (x) {
            case 1: System.out.println("One"); break;
            case 2: System.out.println("Two"); break;
        }
    }
}`,
    options: [
      "Byte x = 1;",
      "short x = 1;",
      "String x = \"1\";",
      "Long x = 1;",
      "double x = 1;",
      "Integer x = new Integer(\"1\");"
    ],
    isMultipleChoice: true,
    correct: [0, 1, 5], // A, B, F
    explanation: "The switch statement in Java SE 8 works with byte, short, char, int, and their corresponding wrapper classes, as well as String and enum types. A: Byte x = 1; - Works. The wrapper class Byte is unboxed to byte which is compatible. B: short x = 1; - Works. The primitive short is compatible. C: String x = \"1\"; - Fails. The case labels are int literals (1, 2), not String literals (\"1\", \"2\"). Type mismatch. D: Long x = 1; - Fails. long and Long are not compatible with switch prior to Java 12. E: double x = 1; - Fails. double and float are not allowed in switch statements. F: Integer x = new Integer(\"1\"); - Works. The wrapper class Integer is unboxed to int, which is compatible."
  },

  // Questions 55-64 (additional questions from your expanded dataset)
  {
    id: 55,
    topic: "Working with Data Types",
    question: "Given the Boolean constructor code fragment, what is the result?",
    code: `public class App {
    public static void main(String[] args) {
        Boolean[] bool = new Boolean[2];
        bool[0] = new Boolean(Boolean.parseBoolean("true"));
        bool[1] = new Boolean(null);
        System.out.println(bool[0] + " " + bool[1]);
    }
}`,
    options: [
      "True false",
      "True null",
      "Compilation fails",
      "A NullPointerException is thrown at runtime"
    ],
    correct: 0,
    explanation: "new Boolean(null) creates a Boolean object representing false. When these Boolean objects are concatenated with a string, their toString() methods are called, resulting in \"true false\"."
  },

  {
    id: 56,
    topic: "Methods and Encapsulation",
    question: "Given the App class with variable scope, what is the result?",
    code: `public class App {
    String myStr = "7007";
    public void doStuff(String str) {
        int myNum = 0;
        try {
            String myStr = str;
            myNum = Integer.parseInt(myStr);
        } catch (NumberFormatException ne) {
            System.err.println("Error");
        }
        System.out.println("myStr: " + myStr + ", myNum: " + myNum);
    }
    public static void main(String[] args) {
        App obj = new App();
        obj.doStuff("9009");
    }
}`,
    options: [
      "myStr: 9009, myNum: 9009",
      "myStr: 7007, myNum: 7007",
      "myStr: 7007, myNum: 9009",
      "Compilation fails"
    ],
    correct: 2,
    explanation: "Inside doStuff, myStr refers to the local variable, which gets the value \"9009\" and is parsed into myNum. The println statement, however, refers to the instance variable myStr, which is \"7007\", and the local variable myNum, which is 9009."
  },

  {
    id: 57,
    topic: "Object-Oriented Programming",
    question: "Which two are benefits of polymorphism?",
    options: [
      "Faster code at runtime",
      "More efficient code at runtime",
      "More dynamic code at runtime",
      "More flexible and reusable code",
      "Code that is protected from extension by other classes"
    ],
    isMultipleChoice: true,
    correct: [2, 3], // C, D
    explanation: "Polymorphism allows for writing code that can work with objects of multiple types, making the code more flexible, reusable, and dynamic (as the actual method to be executed is determined at runtime)."
  },

  {
    id: 58,
    topic: "Arrays",
    question: "Given the array reference assignment code fragment, what is the result?",
    code: `int nums1[] = new int[3];
int nums2[] = {1, 2, 3, 4, 5};
nums1 = nums2;
for (int x : nums1) {
    System.out.print(x + ":");
}`,
    options: [
      "1:2:3:4:5:",
      "1:2:3:",
      "Compilation fails",
      "An ArrayOutOfBoundsException is thrown at runtime"
    ],
    correct: 0,
    explanation: "The reference nums1 is reassigned to point to the same array as nums2. The loop then iterates over this array of 5 elements and prints them."
  },

  {
    id: 59,
    topic: "Methods and Encapsulation",
    question: "Given the Product class equality test, what is the result?",
    code: `public class Product {
    int id;
    String name;
    public Product(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

Product p1 = new Product(101, "Pen");
Product p2 = new Product(101, "Pen");
Product p3 = p1;
boolean ans1 = p1 == p2;
boolean ans2 = p1.name.equals(p2.name);
System.out.print(ans1 + ":" + ans2);`,
    options: [
      "true:true",
      "true:false",
      "false:true",
      "false:false"
    ],
    correct: 2,
    explanation: "p1 and p2 are different objects, so p1 == p2 is false. The name fields of both objects are strings with the same content, so p1.name.equals(p2.name) is true."
  },

  {
    id: 60,
    topic: "Control Structures",
    question: "Given the Triangle class with local variable initialization, what is the result?",
    code: `public class Triangle {
    static double area;
    int b = 2, h = 3;
    public static void main(String[] args) {
        double p, b, h; // line n1
        if (area == 0) {
            b = 3;
            h = 4;
            p = 0.5;
            area = p * b * h; // line n2
        }
        System.out.println("Area is " + area);
    }
}`,
    options: [
      "Area is 6.0",
      "Area is 3.0",
      "Compilation fails at line n1",
      "Compilation fails at line n2"
    ],
    correct: 0,
    explanation: "The static area is initialized to 0.0 by default. The local variables p, b, h are declared and then initialized inside the if block when area == 0 is true. The calculation area = p * b * h results in 0.5 * 3 * 4 = 6.0."
  },

  {
    id: 61,
    topic: "Java Core API",
    question: "Given the code fragment with ArrayList remove operations, what is the result?",
    code: `public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>();
    list.add("Item1");
    list.add("Item2");
    list.add("Item3");
    list.remove(1);
    list.remove("Item3");
    System.out.println(list);
}`,
    options: [
      "[Item1]",
      "[Item1, Item3]",
      "[Item2]",
      "[Item1, Item2]"
    ],
    correct: 0,
    explanation: "Initially: [Item1, Item2, Item3]. list.remove(1) removes element at index 1 (Item2): [Item1, Item3]. list.remove(\"Item3\") removes Item3: [Item1]. Final result: [Item1]."
  },

  {
    id: 62,
    topic: "Exception Handling",
    question: "Given the exception handling code with multiple catch blocks, what is the result?",
    code: `public static void main(String[] args) {
    try {
        String str = null;
        System.out.println(str.length());
    } catch (RuntimeException e) {
        System.out.println("Runtime Exception");
    } catch (Exception e) {
        System.out.println("Exception");
    }
}`,
    options: [
      "Runtime Exception",
      "Exception", 
      "A NullPointerException is thrown",
      "Compilation fails"
    ],
    correct: 0,
    explanation: "str.length() on a null reference throws a NullPointerException, which extends RuntimeException. The first catch block handles RuntimeException and its subclasses, so \"Runtime Exception\" is printed."
  },

  {
    id: 63,
    topic: "Inheritance",
    question: "Given the abstract class and interface implementation, what is the result?",
    code: `abstract class Shape {
    abstract void draw();
    void display() { System.out.println("Shape"); }
}
interface Drawable {
    void render();
}
class Circle extends Shape implements Drawable {
    void draw() { System.out.println("Circle"); }
    public void render() { System.out.println("Render"); }
}
public static void main(String[] args) {
    Shape s = new Circle();
    s.draw();
    s.display();
}`,
    options: [
      "Circle Shape",
      "Shape Circle",
      "Circle",
      "Compilation fails"
    ],
    correct: 0,
    explanation: "s.draw() calls the overridden method in Circle, printing \"Circle\". s.display() calls the inherited method from Shape, printing \"Shape\". Output: \"Circle Shape\"."
  },

  {
    id: 64,
    topic: "Java Core API", 
    question: "Given the StringBuilder manipulation code, what is the result?",
    code: `public static void main(String[] args) {
    StringBuilder sb = new StringBuilder("Java");
    sb.append(" SE").insert(4, " ");
    System.out.println(sb.toString());
}`,
    options: [
      "Java SE",
      "Java  SE", 
      "Jav a SE",
      "Java SE "
    ],
    correct: 1,
    explanation: "sb starts as \"Java\". append(\" SE\") makes it \"Java SE\". insert(4, \" \") inserts a space at index 4 (between 'a' and ' '), resulting in \"Java  SE\" (two spaces between Java and SE)."
  }
];

export const topics = [
  "Inheritance",
  "Package and Imports", 
  "Object-Oriented Programming",
  "Arrays",
  "Methods and Encapsulation",
  "Control Structures",
  "Exception Handling",
  "Java Core API",
  "Java Basics",
  "Working with Data Types",
  "Operators",
  "Collections",
  "Lambdas",
  "Date Time API"
];