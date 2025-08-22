export const questionBank = [
  // Java SE 8 Programmer I Exam Questions

  // Encapsulation
  {
    id: 1,
    topic: "Object-Oriented Programming",
    question: "What is the name of the Java concept that uses access modifiers to protect variables and hide them within a class?",
    options: [
      "Encapsulation",
      "Inheritance", 
      "Abstraction",
      "Instantiation",
      "Polymorphism"
    ],
    correct: 0,
    explanation: "Using the private modifier is the main way that an object encapsulates itself and hides data from the outside world."
  },

  // Access Modifiers and Overriding
  {
    id: 2,
    topic: "Inheritance",
    question: "Which two modifications, made independently, enable the code to compile?",
    code: `abstract class Planet {
    protected void revolve() { // line n1
    }
    abstract void rotate(); // line n2
}

class Earth extends Planet {
    void revolve() { // line n3
    }
    protected void rotate() { // line n4
    }
}`,
    options: [
      "Make the method at line n1 public",
      "Make the method at line n2 public",
      "Make the method at line n3 public",
      "Make the method at line n3 protected",
      "Make the method at line n4 public"
    ],
    correct: 2, // Represents both C and D are correct
    explanation: "An overriding method cannot have a more restrictive access modifier than the method it is overriding. In the Earth class, revolve() can be protected (same) or public (less restrictive). rotate() is an implementation of an abstract method and follows the same rule; since the default access for an abstract method in a class is package-private, protected and public are valid."
  },

  // Constructor Issues
  {
    id: 3,
    topic: "Methods and Encapsulation",
    question: "What is the result of this constructor code?",
    code: `class Vehicle {
    String type = "4W";
    int maxSpeed = 100;

    Vehicle(String type, int maxSpeed) {
        this.type = type;
        this.maxSpeed = maxSpeed;
    }
    Vehicle() {}
}

class Car extends Vehicle {
    String trans;

    Car(String trans) { // line n1
        this.trans = trans;
    }

    Car(String type, int maxSpeed, String trans) { // line n2
        super(type, maxSpeed);
        this(trans); // Compilation Error Here
    }
}`,
    options: [
      "4W 100 Auto, 4W 150 Manual",
      "Null 0 Auto, 4W 150 Manual",
      "Compilation fails only at line n1",
      "Compilation fails only at line n2", 
      "Compilation fails at both line n1 and line n2"
    ],
    correct: 4,
    explanation: "Compilation fails at line n1 because the superclass Vehicle does not have a no-argument constructor, so super() cannot be implicitly called. Compilation also fails at line n2 because the call to this(trans) must be the first statement in the constructor, but super(type, maxSpeed) is already there."
  },

  // Exception Handling
  {
    id: 4,
    topic: "Exception Handling",
    question: "Which two modifications should you make so that the code compiles successfully?",
    code: `class X {
    public void printFileContent() {
        /* code goes here */
        throw new IOException();
    }
}
public class Test {
    public static void main(String[] args) {
        X xobj = new X();
        xobj.printFileContent();
    }
}`,
    options: [
      "Replace line 8 with public static void main(String[] args) throws Exception {",
      "Replace line 10 with a try-catch block for IOException",
      "Replace line 2 with public void printFileContent() throws IOException {",
      "Replace line 4 with throw new IOException(\"Exception raised\");",
      "At line 11, insert throw new IOException();"
    ],
    correct: 0, // Represents both A and C are correct
    explanation: "The method printFileContent throws a checked IOException. Therefore, the method signature must declare this with throws IOException. Additionally, the main method, which calls printFileContent, must either handle this exception with a try-catch block or declare that it also throws the exception."
  },

  // StringBuilder vs String
  {
    id: 5,
    topic: "Java Core API",
    question: "What is the result of this StringBuilder comparison?",
    code: `public class Test {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder(5);
        String s = "";
        if (sb.equals(s)) {
            System.out.println("Match 1");
        } else if (sb.toString().equals(s.toString())) {
            System.out.println("Match 2");
        } else {
            System.out.println("No Match");
        }
    }
}`,
    options: [
      "Match 1",
      "Match 2",
      "No Match",
      "A NullPointerException is thrown at runtime"
    ],
    correct: 1,
    explanation: "The equals method for StringBuilder does not compare the content of the strings but the object references. sb and s are different objects. However, sb.toString() creates a String with the same content as the empty string s, so the second condition evaluates to true."
  },

  // Abstract Classes and Interfaces
  {
    id: 6,
    topic: "Inheritance",
    question: "Which option enables the code to compile?",
    code: `interface Readable {
    public void readBook();
    public void setBookMark();
}

abstract class Book implements Readable { // line n1
    public void readBook() { }
    // line n2
}

class EBook extends Book { // line n3
    public void readBook() { }
    // line n4
}`,
    options: [
      "Replace the code fragment at line n1 with: class Book implements Readable {",
      "At line n2 insert: public abstract void setBookMark();",
      "Replace the code fragment at line n3 with: abstract class EBook extends Book {",
      "At line n4 insert: public void setBookMark() { }"
    ],
    correct: 1,
    explanation: "The abstract class Book implements the Readable interface but does not provide an implementation for the setBookMark() method. Therefore, Book must be declared as abstract, and it must either implement setBookMark() or declare it as an abstract method."
  },

  // Inheritance and Super
  {
    id: 7,
    topic: "Inheritance",
    question: "Which code fragment should you use at line n1 to instantiate the dvd object successfully?",
    code: `class CD {
    int r;
    CD(int r) { this.r = r; }
}
class DVD extends CD {
    int c;
    DVD(int r, int c) {
        // line n1
    }
}`,
    options: [
      "super.r = r; this.c = c;",
      "super(r); this(c);",
      "super(r); this.c = c;",
      "this.c = r; super(c);"
    ],
    correct: 2,
    explanation: "A subclass constructor must call a constructor of its superclass. This is done using super(). After the superclass constructor is called, the subclass can initialize its own fields."
  },

  // Array Iteration
  {
    id: 8,
    topic: "Arrays",
    question: "Which option can replace XXX to enable the code to print 135?",
    code: `int a[] = {1, 2, 3, 4, 5};
for (XXX) {
    System.out.print(a[e]);
}`,
    options: [
      "int e = 0; e <= 4; e++",
      "int e = 0; e < 5; e += 2",
      "int e = 1; e <= 5; e += 1",
      "int e = 1; e < 5; e += 2"
    ],
    correct: 1,
    explanation: "This loop will iterate with e having values 0, 2, and 4, which correspond to the elements 1, 3, and 5 in the array."
  },

  // Package Imports
  {
    id: 9,
    topic: "Package and Imports",
    question: "Which code fragment, when inserted at line 2, enables the code to compile?",
    code: `// SalesMan.java
package sales;
public class SalesMan { }

// Product.java
package sales.products;
public class Product { }

// Market.java
package market;
// insert code here
public class USMarket {
    SalesMan sm;
    Product p;
}`,
    options: [
      "import sales.*;",
      "import java.sales.products.*;",
      "import sales; import sales.products;",
      "import sales.*; import products.*;",
      "import sales.*; import sales.products.*;"
    ],
    correct: 4,
    explanation: "To use classes from other packages, they must be imported. SalesMan is in the sales package and Product is in the sales.products package. Both packages need to be imported."
  },

  // Encapsulation Definition
  {
    id: 10,
    topic: "Object-Oriented Programming",
    question: "Which statement best describes encapsulation?",
    options: [
      "Encapsulation ensures that classes can be designed so that only certain fields and methods of an object are accessible from other objects",
      "Encapsulation ensures that classes can be designed so that their methods are inheritable",
      "Encapsulation ensures that classes can be designed with some fields and methods declared as abstract",
      "Encapsulation ensures that classes can be designed so that if a method has an argument MyType x, any subclass of MyType can be passed to that method"
    ],
    correct: 0,
    explanation: "Encapsulation is the concept of bundling data (attributes) and methods that operate on the data into a single unit, or class, and restricting access to some of the object's components."
  },

  // 2D Arrays
  {
    id: 11,
    topic: "Arrays",
    question: "Which code fragment prints red:blue:small:medium?",
    code: `String shirts[][] = new String[2][2];
shirts[0][0] = "red";
shirts[0][1] = "blue";
shirts[1][0] = "small";
shirts[1][1] = "medium";`,
    options: [
      "for (int index = 1; index < 2; index++) { for (int idx = 1; idx < 2; idx++) { System.out.print(shirts[index][idx] + \":\"); } }",
      "for (int index = 0; index < 2; ++index) { for (int idx = 0; idx < index; ++idx) { System.out.print(shirts[index][idx] + \":\"); } }",
      "for (String c : colors) { for (String s : sizes) { System.out.println(s + \":\"); } }",
      "for (int index = 0; index < 2; ) { for (int idx = 0; idx < 2; ) { System.out.print(shirts[index][idx] + \":\"); idx++; } index++; }"
    ],
    correct: 3,
    explanation: "This nested loop structure correctly iterates through all elements of the 2D array and prints them."
  },

  // Instance Methods and State
  {
    id: 12,
    topic: "Methods and Encapsulation",
    question: "Which three lines, when inserted independently at line n1, cause the program to print a 0 balance?",
    code: `public class CheckingAccount {
    public int amount;
    public CheckingAccount(int amount) {
        this.amount = amount;
    }
    public int getAmount() {
        return amount;
    }
    public void changeAmount(int x) {
        amount += x;
    }
}

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
    correct: 3, // Represents D, G, H are correct
    explanation: "D directly sets the public amount field to 0. G calculates the negative of the current amount and adds it, resulting in 0. H does the same as G, using the getter method."
  },

  // Checked vs Unchecked Exceptions
  {
    id: 13,
    topic: "Exception Handling",
    question: "What is the result of this exception handling code?",
    code: `public class Test {
    void readCard(int cardNo) throws Exception {
        System.out.println("Reading Card");
    }
    void checkCard(int cardNo) throws RuntimeException { // line n1
        System.out.println("Checking Card");
    }
    public static void main(String[] args) {
        Test ex = new Test();
        int cardNo = 12344;
        ex.checkCard(cardNo); // line n2
        ex.readCard(cardNo); // line n3
    }
}`,
    options: [
      "Reading Card, Checking Card",
      "Compilation fails only at line n1",
      "Compilation fails only at line n2",
      "Compilation fails only at line n3",
      "Compilation fails at both line n2 and line n3"
    ],
    correct: 3,
    explanation: "readCard throws a checked Exception. The main method calls it without handling it in a try-catch block or declaring it in its own throws clause, which causes a compilation error at line n3."
  },

  // Switch with Boolean
  {
    id: 14,
    topic: "Control Structures",
    question: "Which modification enables the code fragment to print TrueDone?",
    code: `public static void main(String[] args) {
    boolean opt = true;
    switch (opt) {
        case true:
            System.out.print("True");
            break;
        default:
            System.out.print("***");
    }
    System.out.println("Done");
}`,
    options: [
      "Replace line 5 with String opt= \"true\"; and line 7 with case \"true\":",
      "Replace line 5 with boolean opt = l; and line 7 with case 1:",
      "At line 9, remove the break statement",
      "Remove the default section"
    ],
    correct: 0,
    explanation: "switch statements in Java SE 8 can work with String literals. A boolean type cannot be used in a switch statement."
  },

  // Do-While Loop
  {
    id: 15,
    topic: "Control Structures",
    question: "What is the result of this do-while loop?",
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
      "5",
      "Nothing is printed"
    ],
    correct: 3,
    explanation: "The do-while loop executes its body once, printing \"5 \". Then num becomes 4. The condition (num == 0) is false, so the loop terminates."
  },

  // Jagged Arrays
  {
    id: 16,
    topic: "Arrays",
    question: "What is the result of this jagged array code?",
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
      "97 98, 99 100 null null null",
      "97 98, 99 100 101 102 103",
      "Compilation fails",
      "A NullPointerException is thrown at runtime",
      "An ArrayIndexOutOfBoundsException is thrown at runtime"
    ],
    correct: 0,
    explanation: "The first nested loop only initializes the first two elements of each sub-array because b < chs.length (which is 2). The rest of the elements in chs[1] remain null."
  },

  // Object Initialization
  {
    id: 17,
    topic: "Methods and Encapsulation",
    question: "Which two modifications, when made independently, enable the code to print joe:true:100.0?",
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
    correct: 0, // Represents A and C are correct
    explanation: "A sets the instance variables directly on the created object e. C initializes the instance variables within the constructor."
  },

  // List.remove()
  {
    id: 18,
    topic: "Collections",
    question: "What is the result of this List manipulation?",
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
      "An exception is thrown at runtime"
    ],
    correct: 0,
    explanation: "names.remove(\"Bran\") removes the first occurrence of \"Bran\" and returns true. The code then attempts to remove \"Jon\", which is not in the list, so the list remains unchanged from that point. The final list is [Robb, Rick, Bran]."
  },

  // Constructor Chain
  {
    id: 19,
    topic: "Inheritance",
    question: "What is the result of this constructor chain?",
    code: `class A {
    public A() { System.out.print("A "); }
}
class B extends A {
    public B() { System.out.print("B "); } // line n1
}
class C extends B {
    public C() { System.out.print("C "); } // line n2
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
    explanation: "When an object of a subclass is created, the constructors of its superclasses are called in order, from the top-level superclass down to the subclass itself."
  },

  // Static vs Instance Variables
  {
    id: 20,
    topic: "Methods and Encapsulation",
    question: "What is the result of this static vs instance variable code?",
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
        System.out.println(x1.i + " " + x1.j + " " + x2.i + " " + x2.j);
    }
}`,
    options: [
      "3 4 5 6",
      "3 4 3 6",
      "5 4 5 6",
      "3 6 4 6"
    ],
    correct: 2,
    explanation: "i is a static variable, shared by all instances of X. So when x2.i is set to 5, x1.i also becomes 5. j is an instance variable, so each object has its own copy."
  },

  // Array Declaration
  {
    id: 21,
    topic: "Arrays",
    question: "Which code fragment, when inserted at line 3, enables the code to print 10:20?",
    code: `public class Test {
    public static void main(String[] args) {
        /* insert code here */
        array[0] = 10;
        array[1] = 20;
        System.out.print(array[0] + ":" + array[1]);
    }
}`,
    options: [
      "int[] array n= new int[2];",
      "int[] array; array = new int[2];",
      "int array = new int[2];",
      "int array [2] ;"
    ],
    correct: 1,
    explanation: "This correctly declares an integer array reference array and then initializes it to a new array of size 2."
  },

  // Loop Control - Continue and Break
  {
    id: 22,
    topic: "Control Structures",
    question: "What is the result of this loop with continue and break?",
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
    explanation: "The loop prints \"A \", then \"Work done\" and then breaks, exiting the loop."
  },

  // Exception Mechanism Advantages
  {
    id: 23,
    topic: "Exception Handling",
    question: "Which three are advantages of the Java exception mechanism?",
    options: [
      "Improves the program structure because the error handling code is separated from the normal program function",
      "Provides a set of standard exceptions that covers all the possible errors",
      "Improves the program structure because the programmer can choose where to handle exceptions",
      "Improves the program structure because exceptions must be handled in the method in which they occurred",
      "Allows the creation of new exceptions that are tailored to the particular program being created"
    ],
    correct: 0, // Represents A, C, E are correct
    explanation: "The Java exception handling mechanism separates error-handling code from the main logic, allows developers to decide where to handle exceptions, and supports the creation of custom exception types."
  },

  // Command Line Compilation
  {
    id: 24,
    topic: "Java Basics",
    question: "Which set of commands prints Hello Duke in the console?",
    code: `public class Greeting {
    public static void main(String[] args) {
        System.out.println("Hello " + args[0]);
    }
}`,
    options: [
      "javac Greeting.java, java Greeting Duke",
      "javac Greeting.java, java Greeting.java Duke",
      "javac Greeting, java Greeting Duke",
      "javac Greeting.java, java Greeting.class Duke"
    ],
    correct: 0,
    explanation: "javac compiles the .java source file into a .class file. The java command runs the compiled code, and you provide the class name without the extension, followed by any command-line arguments."
  },

  // For Loop Conditions
  {
    id: 25,
    topic: "Control Structures",
    question: "What is the result of this for loop?",
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
    explanation: "The loop will execute for ii values of 0, 2, and 4. When ii is 6, the condition 6 < 6 is false, and the loop terminates."
  },

  // String Reference Comparison
  {
    id: 26,
    topic: "Java Core API",
    question: "Which code fragment, when inserted at line 9, enables the code to print true?",
    code: `StringBuilder sb1 = new StringBuilder("Duke");
String str1 = sb1.toString();
// insert code here
System.out.print(str1 == str2);`,
    options: [
      "String str2 = str1;",
      "String str2 = new String(str1);",
      "String str2 = sb1.toString();",
      "String str2 = \"Duke\";"
    ],
    correct: 0,
    explanation: "For the == operator to return true for objects, both references must point to the exact same object in memory. Assigning str1 to str2 achieves this."
  },

  // Static Variable Sharing
  {
    id: 27,
    topic: "Methods and Encapsulation",
    question: "What is the result of this static variable test?",
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
    explanation: "count is a static variable, so its value is shared across all instances. check1.changeCount() increments it to 5. Then check2.changeCount() increments it another 5 times to 10. Both check1.count and check2.count refer to the same static variable."
  },

  // Conditional Operators
  {
    id: 28,
    topic: "Operators",
    question: "Which two code fragments can be independently placed at line n1 to meet the requirements?",
    code: `public static void main(String[] args) {
    double discount = 0;
    int qty = Integer.parseInt(args[0]);
    // line n1
}

// Requirements:
// If qty >= 90, discount = 0.5
// If qty between 80 and 90, discount = 0.2`,
    options: [
      "if (qty >= 90) { discount = 0.5; } if (qty > 80 && qty < 90) { discount = 0.2; }",
      "discount = (qty >= 90) ? 0.5 : 0; discount = (qty > 80) ? 0.2 : 0;",
      "discount = (qty >= 90) ? 0.5 : (qty > 80) ? 0.2 : 0;",
      "if (qty > 80 && qty < 90) { discount = 0.2; } else { discount = 0; } if (qty >= 90) { discount = 0.5; } else { discount = 0; }",
      "discount = (qty > 80) ? 0.2 : (qty >= 90) ? 0.5 : 0;"
    ],
    correct: 0, // Represents A and C are correct
    explanation: "A uses two separate if statements that correctly set the discount based on the conditions. C uses a nested ternary operator that correctly reflects the logic."
  },

  // Ternary Operator
  {
    id: 29,
    topic: "Operators", 
    question: "What is the result of this ternary operator code?",
    code: `public class Test {
    public static void main(String[] args) {
        if (args[0].equals("Hello") ? false : true) {
            System.out.println("Success");
        } else {
            System.out.println("Failure");
        }
    }
}

// Commands: javac Test.java, java Test Hello`,
    options: [
      "Success",
      "Failure",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    correct: 1,
    explanation: "With the argument \"Hello\", args[0].equals(\"Hello\") is true. The ternary operator true ? false : true evaluates to false. Therefore, the else block is executed."
  },

  // Object-Oriented Features
  {
    id: 30,
    topic: "Object-Oriented Programming",
    question: "Which three statements describe the object-oriented features of the Java language?",
    options: [
      "Objects cannot be reused",
      "A subclass can inherit from a superclass",
      "Objects can share behaviors with other objects",
      "A package must contain more than one class",
      "Object is the root class of all other objects",
      "A main method must be declared in every class"
    ],
    correct: 1, // Represents B, C, E are correct
    explanation: "B: Inheritance is a core OOP feature. C: Objects of the same class share methods (behaviors). E: In Java, Object is the ultimate superclass of all other classes."
  },

  // Array Length vs String Length
  {
    id: 31,
    topic: "Arrays",
    question: "What is the output of this array and string length code?",
    code: `public static void main(String[] args) {
    String[] planets = {"Mercury", "Venus", "Earth", "Mars"};
    System.out.println(planets.length);
    System.out.println(planets[1].length());
}`,
    options: [
      "4, 4",
      "3, 5",
      "4, 7",
      "5, 4",
      "4, 5",
      "4, 21"
    ],
    correct: 4,
    explanation: "planets.length is the number of elements in the array, which is 4. planets[1].length() is the length of the string \"Venus\", which is 5."
  },

  // Access Modifiers Across Packages
  {
    id: 32,
    topic: "Methods and Encapsulation",
    question: "Which statement is true about accessing variables across packages?",
    code: `// Acc.java
package p1;
public class Acc {
    int p;
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
    }
}`,
    options: [
      "Both p and s are accessible by obj",
      "Only s is accessible by obj",
      "Both r and s are accessible by obj",
      "p, r, and s are accessible by obj"
    ],
    correct: 1,
    explanation: "From an object of type Acc, only the public member s is accessible from another package. p has default (package-private) access, and r is protected, so it's only accessible within the subclass Test through inheritance, not directly via an Acc reference."
  },

  // Infinite Loop with ArrayList
  {
    id: 33,
    topic: "Exception Handling",
    question: "What is the result of this ArrayList infinite loop code?",
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
      "Execution terminates in the first catch statement, and Caught a RuntimeException is printed to the console",
      "Execution terminates in the second catch statement, and Caught an Exception is printed to the console",
      "A runtime error is thrown in the thread \"main\"",
      "Execution completes normally, and Ready to use is printed to the console",
      "The code fails to compile because a throws keyword is required"
    ],
    correct: 2,
    explanation: "The while(true) loop will run indefinitely, adding strings to the ArrayList. This will eventually cause an OutOfMemoryError. Since Error is not a subclass of Exception, it will not be caught by the catch blocks, and the program will terminate with an error."
  },

  // Lambda Expressions
  {
    id: 34,
    topic: "Lambdas",
    question: "Which code fragment, when inserted at line n1, enables the code to print Hank?",
    code: `// Person.java
public class Person {
    String name;
    int age;
    // constructor and getters
}

// Test.java
public class Test {
    public static void checkAge(List<Person> list, Predicate<Person> predicate) {
        for (Person p : list) {
            if (predicate.test(p)) {
                System.out.println(p.name + " ");
            }
        }
    }
    public static void main(String[] args) {
        List<Person> iList = Arrays.asList(new Person("Hank", 45), new Person("Charlie", 40), new Person("Smith", 38));
        // line n1
    }
}`,
    options: [
      "checkAge(iList, () -> p.getAge() > 40);",
      "checkAge(iList, Person p -> p.getAge() > 40);",
      "checkAge(iList, p -> p.getAge() > 40);",
      "checkAge(iList, (Person p) -> { p.getAge() > 40; });"
    ],
    correct: 2,
    explanation: "This provides a valid lambda expression for the Predicate functional interface. The type of p is inferred by the compiler."
  },

  // String Immutability
  {
    id: 35,
    topic: "Java Core API",
    question: "What is the result of this String trim() code?",
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
    explanation: "String objects are immutable. The trim() method returns a new string without leading/trailing whitespace, but the original str is not changed. It still refers to \" \". Therefore, it's not equal to \"\" and it's not empty."
  },

  // String Case Comparison
  {
    id: 36,
    topic: "Java Core API",
    question: "Which code fragment, when inserted at line n1, enables the App class to print Equal?",
    code: `public class App {
    public static void main(String[] args) {
        String str1 = "Java";
        String str2 = new String("java");
        // line n1
        {
            System.out.println("Equal");
        } else {
            System.out.println("Not Equal");
        }
    }
}`,
    options: [
      "if (str1 == str2)",
      "if (str1.equalsIgnoreCase(str2))",
      "if (str1.equals(str2))",
      "if (str1.toLowerCase() == str2.toLowerCase())"
    ],
    correct: 1,
    explanation: "The equalsIgnoreCase method compares two strings for equality, ignoring case differences."
  },

  // Method Overloading with Types
  {
    id: 37,
    topic: "Methods and Encapsulation",
    question: "What is the result of this method overloading code?",
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
      "integer sum is 30, double sum is 30.0",
      "integer sum is 30, float sum is 30.0"
    ],
    correct: 1,
    explanation: "The call doSum(10, 20) matches the doSum(int, int) method. The call doSum(10.0, 20.0) matches doSum(double, double) because floating-point literals are double by default."
  },

  // Array with Null Elements
  {
    id: 38,
    topic: "Arrays",
    question: "What is the result of this String array code?",
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
      "A NullPointerException is thrown at runtime"
    ],
    correct: 3,
    explanation: "The array strs is initialized with two null elements. In the first loop, strs[idx] is null, and calling the concat method on a null reference throws a NullPointerException."
  },

  // Constructor Call Issues
  {
    id: 39,
    topic: "Inheritance",
    question: "What is the result of this constructor call code?",
    code: `class Vehicle {
    int x;
    Vehicle() {
        this(10); // line n1
    }
    Vehicle(int x) {
        this.x = x;
    }
}

class Car extends Vehicle {
    int y;
    Car() {
        super();
        this(20); // line n2
    }
    Car(int y) {
        this.y = y;
    }
    public String toString() {
        return super.x + ":" + this.y;
    }
}`,
    options: [
      "10:20",
      "0:20",
      "Compilation fails at line n1",
      "Compilation fails at line n2"
    ],
    correct: 3,
    explanation: "A constructor can have a call to super() or this(), but not both. Also, such a call must be the very first statement. The constructor Car() violates this rule."
  },

  // toString() Override
  {
    id: 40,
    topic: "Methods and Encapsulation",
    question: "What is the result of this toString() code?",
    code: `//MyString.java
package p1;
class MyString {
    String msg;
    MyString(String msg) { this.msg = msg; }
}

//Test.java
package p1;
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello " + new StringBuilder("Java SE 8"));
        System.out.println("Hello " + new MyString("Java SE 8"));
    }
}`,
    options: [
      "Hello Java SE 8, Hello Java SE 8",
      "Hello java.lang.StringBuilder@<hashcode1>, Hello p1.MyString@<hashcode2>",
      "Hello Java SE 8, Hello p1.MyString@<hashcode>",
      "Compilation fails at the Test class"
    ],
    correct: 2,
    explanation: "StringBuilder has a toString() method that returns its content. The MyString class does not override toString(), so the default implementation from the Object class is used, which prints the class name and hash code."
  },

  // Main Method Overloading
  {
    id: 41,
    topic: "Java Basics",
    question: "What is the result when running this main method overloading code?",
    code: `public class MainTest {
    public static void main(int[] args) { System.out.println("int main " + args[0]); }
    public static void main(Object[] args) { System.out.println("Object main " + args[0]); }
    public static void main(String[] args) { System.out.println("String main " + args[0]); }
}

// Commands: javac MainTest.java, java MainTest 1 2 3`,
    options: [
      "int main 1",
      "Object main 1",
      "String main 1",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    correct: 2,
    explanation: "The Java runtime environment specifically looks for a main method with the signature public static void main(String[] args)."
  },

  // 2D Array Initialization
  {
    id: 42,
    topic: "Arrays",
    question: "Which option represents the state of the num array after successful completion of the outer loop?",
    code: `int num[][] = new int[1][3];
for (int i = 0; i < num.length; i++) {
    for (int j = 0; j < num[i].length; j++) {
        num[i][j] = 10;
    }
}`,
    options: [
      "num[0][0] = 10, num[0][1] = 10, num[0][2] = 10",
      "num[0][0] = 10, num[1][0] = 10, num[2][0] = 10",
      "num[0][0] = 10, num[0][1] = 0, num[0][2] = 0",
      "num[0][0] = 10, num[1][1] = 10, num[2][2] = 10"
    ],
    correct: 0,
    explanation: "The code initializes a 2D array with 1 row and 3 columns. The nested loops iterate through each element and assign it the value 10."
  },

  // Array toString()
  {
    id: 43,
    topic: "Arrays",
    question: "What is the output of this Planet array code?",
    code: `public class Planet {
    public String name;
    public int moons;
    public Planet(String name, int moons) {
        this.name = name;
        this.moons = moons;
    }
}

public static void main(String[] args) {
    Planet[] planets = {
        new Planet("Mercury", 0),
        new Planet("Venus", 0),
        new Planet("Earth", 1),
        new Planet("Mars", 2)
    };
    System.out.println(planets);
    System.out.println(planets[2].name);
    System.out.println(planets[2].moons);
}`,
    options: [
      "planets, Earth, 1",
      "[LPlanets.Planet;@<hashcode>, Earth, 1",
      "[LPlanets.Planet;@<hashcode>, [LPlanets.Planet;@<hashcode>, 1",
      "[LPlanets.Planet;@<hashcode>, Earth, 1"
    ],
    correct: 1,
    explanation: "Printing an array directly calls the toString method of the array object, which results in a string representing its type and hashcode. Accessing elements of the array and their fields prints their values."
  },

  // Enhanced For Loop vs Traditional
  {
    id: 44,
    topic: "Arrays",
    question: "Which two code fragments, independently, print each element in this array?",
    code: `int[] intArr = {8, 16, 32, 64, 128};`,
    options: [
      "for (int i : intArr) { System.out.print(intArr[i] + \" \"); }",
      "for (int i : intArr) { System.out.print(i + \" \"); }",
      "for (int i=0 : intArr) { System.out.print(intArr[i] + \" \"); i++; }",
      "for (int i=0; i < intArr.length; i++) { System.out.print(i + \" \"); }",
      "for (int i=0; i < intArr.length; i++) { System.out.print(intArr[i] + \" \"); }"
    ],
    correct: 1, // Represents B and E are correct
    explanation: "B correctly uses the enhanced for loop to iterate through the values of the array. E uses a standard for loop with an index to access and print each element."
  },

  // Compilation Errors in Multiple Files
  {
    id: 45,
    topic: "Java Basics",
    question: "Which statement is true about these file compilation results?",
    code: `// A.java
public class A {
    public void a() {}
    int a;
}

// B.java
public class B {
    private int doStuff() {
        private int x = 100; // Compilation Error
        return x++;
    }
}

// C.java
import java.io.*;
package p1; // Compilation Error
class A {
    public void main(String fileName) throws IOException {}
}`,
    options: [
      "Only the A.java file compiles successfully",
      "Only the B.java file compiles successfully",
      "Only the C.java file compiles successfully",
      "The A.java and B.java files compile successfully",
      "The B.java and C.java files compile successfully",
      "The A.java and C.java files compile successfully"
    ],
    correct: 0,
    explanation: "B.java fails because you cannot have access modifiers (private) for local variables inside a method. C.java fails because the package declaration must be the first statement in the file."
  },

  // Loop Types and Requirements
  {
    id: 46,
    topic: "Control Structures",
    question: "Which two statements are true about implementing these array processing requirements?",
    code: `int[] array = {1, 2, 3, 4, 5};

// Requirements:
// 1. Process all elements in order of entry
// 2. Process all elements in reverse order
// 3. Process alternating elements in order`,
    options: [
      "Requirements 1, 2, and 3 can be implemented by using the enhanced for loop",
      "Requirements 1, 2, and 3 can be implemented by using the standard for loop",
      "Requirements 2 and 3 CANNOT be implemented by using the standard for loop",
      "Requirement 1 can be implemented by using the enhanced for loop",
      "Requirement 3 CANNOT be implemented by using either the enhanced for loop or the standard for loop"
    ],
    correct: 1, // Represents B and D are correct
    explanation: "The standard for loop provides full control over the iteration (start, end, step), so it can implement all three requirements. The enhanced for loop iterates through all elements from beginning to end, so it can only satisfy requirement 1."
  },

  // Parameter Passing
  {
    id: 47,
    topic: "Methods and Encapsulation",
    question: "What is the result of this parameter passing code?",
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
      "Compilation fails"
    ],
    correct: 0,
    explanation: "Java passes arguments by value. The doCalc method receives a copy of the value of var1. It modifies its local copy and returns the new value (400), which is printed. The original var1 in main remains unchanged (200)."
  },

  // Java Bytecode
  {
    id: 48,
    topic: "Java Basics",
    question: "Which statement is true about Java byte code?",
    options: [
      "It can run on any platform",
      "It can run on any platform only if it was compiled for that platform",
      "It can run on any platform that has the Java Runtime Environment",
      "It can run on any platform that has a Java compiler"
    ],
    correct: 2,
    explanation: "Java bytecode is platform-independent, but it requires a Java Virtual Machine (JVM), which is part of the Java Runtime Environment (JRE), to be executed on a specific platform."
  },

  // Object Instance Count
  {
    id: 49,
    topic: "Methods and Encapsulation",
    question: "How many MarkList instances are created in memory at runtime?",
    code: `public class MarkList {
    int num;
    public static void graceMarks(MarkList obj4) {
        obj4.num += 10;
    }
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
    explanation: "Only one instance of MarkList is created with new MarkList(). obj2 is just another reference to the same object. obj3 is a null reference."
  },

  // Local Variable Initialization
  {
    id: 50,
    topic: "Control Structures",
    question: "What is the result of this local variable code?",
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
    correct: 3,
    explanation: "The local variables p, b, and h are declared but might not be initialized if area is not 0. However, the static area is initialized to 0.0 by default. Inside the if block, area is calculated, but this change is not reflected outside the block. The line area = p * b * h after the if block will cause a compile error because p, b, and h might not have been initialized."
  },

  // Switch Statement Types
  {
    id: 51,
    topic: "Control Structures",
    question: "Which three code fragments can be independently inserted at line n1 to enable the code to print One?",
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
      "Double x = 1;",
      "Integer x = new Integer(\"1\");"
    ],
    correct: 0, // Represents A, B, F are correct
    explanation: "switch statements support byte, short, char, int, and their wrapper classes, as well as enum and String. Long and Double are not supported."
  },

  // Boolean Constructor
  {
    id: 52,
    topic: "Working with Data Types",
    question: "What is the result of this Boolean constructor code?",
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

  // Variable Scope in Methods
  {
    id: 53,
    topic: "Methods and Encapsulation",
    question: "What is the result of this variable scope code?",
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

  // Polymorphism Benefits
  {
    id: 54,
    topic: "Object-Oriented Programming",
    question: "Which two are benefits of polymorphism?",
    options: [
      "Faster code at runtime",
      "More efficient code at runtime",
      "More dynamic code at runtime",
      "More flexible and reusable code",
      "Code that is protected from extension by other classes"
    ],
    correct: 2, // Represents C and D are correct
    explanation: "Polymorphism allows for writing code that can work with objects of multiple types, making the code more flexible, reusable, and dynamic (as the actual method to be executed is determined at runtime)."
  },

  // Array Reference Assignment
  {
    id: 55,
    topic: "Arrays",
    question: "What is the result of this array reference assignment?",
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

  // Object Equality
  {
    id: 56,
    topic: "Methods and Encapsulation",
    question: "What is the result of this object equality test?",
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
  }
];

export const topics = [
  "Scope Variables",
  "Java Core API", 
  "Lambdas",
  "Working with Data Types",
  "Operators", 
  "Package and Imports",
  "Looping",
  "Arrays",
  "Methods and Encapsulation",
  "Inheritance", 
  "Control Structures",
  "Exception Handling",
  "Date Time API",
  "Collections",
  "Object-Oriented Programming",
  "Java Basics"
];
