// Comprehensive Technical Interview Questions dataset

export const TECHNICAL_QUESTIONS = [
  {
    id: 'tech-core-java-jvm-memory',
    topic: 'Core Java',
    question: 'Explain the JVM Memory Model: Heap, Stack, Metaspace, and Garbage Collection.',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'TCS', 'Accenture', 'Oracle', 'Cognizant'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Java Developer Technical Round 2024',
    lastVerified: 'Oct 2024',
    keywords: ['Heap', 'Stack', 'Metaspace', 'Garbage Collector', 'G1GC', 'Young Generation', 'Old Generation'],
    answerGuidance: {
      summary: 'The JVM divides memory into Stack (thread-specific frames for primitive locals and method call references) and Heap (shared storage for objects). Metaspace holds class metadata since Java 8.',
      keyPoints: [
        'Heap Memory: Shared across threads. Divided into Young Gen (Eden, Survivor spaces S0, S1) and Old Gen (Tenured).',
        'Stack Memory: Created per thread. Holds local primitive variables and references to heap objects. Follows LIFO.',
        'Metaspace: Replaced PermGen in Java 8; expands dynamically in native OS memory.',
        'Garbage Collection: Minor GC clears Young Gen; Major/Full GC clears Old Gen. Modern JVMs use G1GC or ZGC for low-latency collection.'
      ],
      codeSnippet: `// Stack vs Heap example
public void demonstrate() {
    int primitiveAge = 22;             // Stored on the Thread Stack
    Employee emp = new Employee();     // Reference 'emp' on Stack, Object instance created on Heap
}`
    }
  },
  {
    id: 'tech-oop-four-pillars',
    topic: 'OOP concepts',
    question: 'How do you explain the 4 pillars of OOP with real-world enterprise engineering examples?',
    difficulty: 'Easy',
    companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant', 'HCLTech'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'TCS Digital Technical Viva 2024',
    lastVerified: 'Nov 2024',
    keywords: ['Encapsulation', 'Abstraction', 'Inheritance', 'Polymorphism', 'Interfaces', 'Overloading'],
    answerGuidance: {
      summary: 'Encapsulation restricts direct state access; Abstraction exposes interface while hiding internal complexity; Inheritance promotes reusability; Polymorphism enables single interfaces for multiple implementations.',
      keyPoints: [
        'Encapsulation: Private fields with public getters/setters and domain validation (e.g. BankAccount balance cannot be modified arbitrarily).',
        'Abstraction: Abstract classes / Interfaces (e.g. PaymentGateway interface with executePayment() implemented by StripePayment and RazorpayPayment).',
        'Inheritance: Subclassing base logic (e.g. Employee parent class extended by FullTimeEmployee and ContractEmployee).',
        'Polymorphism: Compile-time (Method overloading) and Runtime (Method overriding with dynamic method dispatch).'
      ],
      codeSnippet: `public interface PaymentProcessor {
    PaymentResult process(BigDecimal amount); // Abstraction
}

public class UpiPaymentProcessor implements PaymentProcessor {
    @Override
    public PaymentResult process(BigDecimal amount) {
        // Polymorphic implementation
        return executeUpiHandshake(amount);
    }
}`
    }
  },
  {
    id: 'tech-collections-hashmap-internal',
    topic: 'Collections',
    question: 'How does Java HashMap work internally? Explain buckets, hash collision handling, and Java 8 treeification.',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'Amazon', 'Oracle', 'Microsoft', 'Cognizant'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Specialist Programmer Interview 2024',
    lastVerified: 'Jan 2025',
    keywords: ['HashMap', 'HashCode', 'Equals', 'Buckets', 'Red-Black Tree', 'TREEIFY_THRESHOLD', 'Load Factor'],
    answerGuidance: {
      summary: 'HashMap uses an array of Node<K,V> buckets. It calculates index using (n - 1) & hash(key). In Java 8, when a bucket exceeds 8 entries (TREEIFY_THRESHOLD) and table length is >= 64, it converts from a linked list to a Red-Black Tree for O(log n) lookups.',
      keyPoints: [
        'Default capacity is 16, default load factor is 0.75 (resizes when size reaches 12).',
        'Hash collisions occur when distinct keys produce identical bucket indices. Resolved via separate chaining.',
        'Java 8 Optimization: Converts linked list bucket to Balanced Red-Black Tree when collision depth exceeds 8, preventing worst-case O(n) DoS attacks.',
        'Contract: If a.equals(b), then a.hashCode() MUST equal b.hashCode().'
      ],
      codeSnippet: `// Key hashing calculation in Java 8+
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}`
    }
  },
  {
    id: 'tech-exception-handling',
    topic: 'Exception Handling',
    question: 'Difference between Checked and Unchecked Exceptions in Java, and best practices for custom exception handling in Spring Boot.',
    difficulty: 'Easy',
    companyTags: ['Infosys', 'Accenture', 'Deloitte', 'Tech Mahindra'],
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Infosys Java Competency Test & Campus Drive',
    lastVerified: 'Oct 2024',
    keywords: ['Checked', 'Unchecked', 'RuntimeException', 'ControllerAdvice', 'ExceptionHandler', 'Custom Exception'],
    answerGuidance: {
      summary: 'Checked exceptions inherit from Exception (excluding RuntimeException) and must be declared or caught at compile time. Unchecked exceptions inherit from RuntimeException. In modern Spring Boot, unchecked domain exceptions paired with @ControllerAdvice are standard.',
      keyPoints: [
        'Checked: IOException, SQLException (represent recoverable external conditions).',
        'Unchecked: NullPointerException, IllegalArgumentException, ResourceNotFoundException (programming or validation defects).',
        'Best Practice: Never swallow exceptions with empty catch blocks.',
        'Spring Boot Standard: Use @RestControllerAdvice with @ExceptionHandler to return structured ProblemDetails (RFC 7807) responses.'
      ],
      codeSnippet: `@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiError> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(new ApiError("NOT_FOUND", ex.getMessage(), LocalDateTime.now()));
    }
}`
    }
  },
  {
    id: 'tech-multithreading-concurrency',
    topic: 'Multithreading',
    question: 'What is the difference between synchronized, volatile, and AtomicInteger in Java concurrency?',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'Amazon', 'Oracle', 'IBM', 'Microsoft'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Oracle Cloud & Infosys Digital Specialist Interview 2024',
    lastVerified: 'Nov 2024',
    keywords: ['Synchronized', 'Volatile', 'AtomicInteger', 'CAS', 'Visibility', 'Atomicity', 'Mutex'],
    answerGuidance: {
      summary: 'Volatile guarantees visibility (flushing variables to main memory) but not atomicity. Synchronized guarantees both mutual exclusion and visibility through object monitors. AtomicInteger provides lock-free thread-safe atomic operations via CPU hardware CAS (Compare-And-Swap).',
      keyPoints: [
        'volatile boolean flag: Threads read directly from RAM instead of CPU L1/L2 caches, preventing stale reads.',
        'synchronized: Heavyweight mutual exclusion; blocks other threads trying to enter critical section.',
        'AtomicInteger: Non-blocking atomic increments using Unsafe.compareAndSwapInt; highest throughput for counters.'
      ],
      codeSnippet: `// Lock-free atomic counter
private final AtomicInteger counter = new AtomicInteger(0);

public int nextSequence() {
    return counter.incrementAndGet(); // Thread-safe without synchronized keyword
}`
    }
  },
  {
    id: 'tech-java-8-features',
    topic: 'Java 8 features',
    question: 'Explain Java 8 Lambdas, Functional Interfaces, Streams API, and Optional class with practical usage.',
    difficulty: 'Easy',
    companyTags: ['Infosys', 'TCS', 'Cognizant', 'Deloitte', 'Accenture', 'Wipro'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Java Developer Hiring Drive 2024',
    lastVerified: 'Dec 2024',
    keywords: ['Lambda', 'FunctionalInterface', 'Stream', 'Optional', 'filter', 'map', 'reduce'],
    answerGuidance: {
      summary: 'Java 8 introduced functional programming capabilities. Lambdas provide concise anonymous function expressions. Streams enable declarative pipeline transformations (filter, map, reduce). Optional eliminates NullPointerException risks.',
      keyPoints: [
        'Functional Interfaces: Have exactly one abstract method (@FunctionalInterface), e.g., Predicate<T>, Function<T,R>, Consumer<T>, Supplier<T>.',
        'Streams API: Performs lazy evaluation on collections. Intermediate operations return a new Stream; terminal operation (collect, count) initiates processing.',
        'Optional<T>: Container object which may or may not contain a non-null value.'
      ],
      codeSnippet: `// Processing active employees using Java 8 Streams
List<String> topPerformers = employees.stream()
    .filter(e -> e.isActive() && e.getRating() >= 4.5)
    .sorted(Comparator.comparing(Employee::getSalary).reversed())
    .map(Employee::getName)
    .collect(Collectors.toList());`
    }
  },
  {
    id: 'tech-sql-joins-group-by',
    topic: 'SQL',
    question: 'Explain the difference between INNER, LEFT, RIGHT, and FULL OUTER JOINs, and write a query to find the Nth highest salary.',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'TCS', 'Accenture', 'Oracle', 'Deloitte', 'Amazon'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Technical Assessment & Deloitte USI 2024',
    lastVerified: 'Jan 2025',
    keywords: ['INNER JOIN', 'LEFT JOIN', 'DENSE_RANK', 'Nth highest salary', 'Window Functions', 'GROUP BY'],
    answerGuidance: {
      summary: 'INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from left table plus matched rows. The Nth highest salary is best solved using the DENSE_RANK() window function to handle ties correctly.',
      keyPoints: [
        'INNER: Only intersecting keys.',
        'LEFT OUTER: All left rows, null for unmatched right columns.',
        'RIGHT OUTER: All right rows, null for unmatched left columns.',
        'Window Function DENSE_RANK(): Assigns consecutive rank numbers without gaps when salaries are identical.'
      ],
      codeSnippet: `-- 2nd Highest Salary using DENSE_RANK
WITH RankedSalaries AS (
    SELECT emp_name, salary, 
           DENSE_RANK() OVER (ORDER BY salary DESC) as rank_num
    FROM employees
)
SELECT emp_name, salary 
FROM RankedSalaries 
WHERE rank_num = 2;`
    }
  },
  {
    id: 'tech-dbms-acid-indexing',
    topic: 'DBMS',
    question: 'What are ACID properties in DBMS, and how does B-Tree indexing speed up SELECT queries?',
    difficulty: 'Medium',
    companyTags: ['Oracle', 'Infosys', 'Amazon', 'Microsoft', 'IBM'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Oracle Database Engineering & Infosys OA 2024',
    lastVerified: 'Nov 2024',
    keywords: ['ACID', 'Atomicity', 'Consistency', 'Isolation', 'Durability', 'B-Tree', 'Clustered Index'],
    answerGuidance: {
      summary: 'ACID guarantees database transaction reliability. Indexes use self-balancing B-Trees/B+Trees to reduce disk I/O operations from O(n) full table scans to O(log n) tree traversals.',
      keyPoints: [
        'Atomicity: All-or-nothing execution via write-ahead logging (WAL).',
        'Consistency: Transactions preserve all schema integrity constraints.',
        'Isolation: Concurrent transactions do not interfere; governed by isolation levels (Read Committed, Repeatable Read, Serializable).',
        'Durability: Committed changes survive system crashes.',
        'Clustered Index: Determines the physical order of data on disk (one per table, usually Primary Key).'
      ],
      codeSnippet: `CREATE INDEX idx_user_email ON users(email);
-- Speeds up: SELECT * FROM users WHERE email = 'john@example.com';
-- Converts O(n) table scan into O(log n) index lookup.`
    }
  },
  {
    id: 'tech-spring-boot-architecture',
    topic: 'Spring Boot',
    question: 'Explain Spring Boot Autoconfiguration, Inversion of Control (IoC), and Dependency Injection (DI).',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'Cognizant', 'Capgemini', 'Wipro', 'Accenture'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Java Full Stack Developer Interview 2024',
    lastVerified: 'Nov 2024',
    keywords: ['Spring Boot', 'IoC Container', 'Dependency Injection', 'Autoconfiguration', '@SpringBootApplication', 'Bean Lifecycle'],
    answerGuidance: {
      summary: 'Spring Boot eliminates boilerplate XML configuration through @EnableAutoConfiguration and opinionated starter POMs. The IoC Container manages object lifecycles, and DI supplies dependencies via constructor injection.',
      keyPoints: [
        'IoC (Inversion of Control): The framework instantiates and wires objects rather than the developer using "new".',
        'Dependency Injection: Constructor injection is preferred over field injection (@Autowired) for immutability and unit testing.',
        'Autoconfiguration: Scans classpath using spring.factories / AutoConfiguration.imports and configures beans conditionally (e.g. @ConditionalOnClass(DataSource.class)).'
      ],
      codeSnippet: `@Service
public class OrderService {
    private final PaymentRepository paymentRepo;

    // Recommended Constructor Injection
    public OrderService(PaymentRepository paymentRepo) {
        this.paymentRepo = paymentRepo;
    }
}`
    }
  },
  {
    id: 'tech-hibernate-jpa',
    topic: 'Hibernate',
    question: 'What is the N+1 problem in Hibernate/JPA, and how do you resolve it?',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'Cognizant', 'Deloitte', 'Oracle'],
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Infosys Specialist Programmer Technical Round',
    lastVerified: 'Oct 2024',
    keywords: ['Hibernate', 'N+1 Problem', 'JPA', 'JOIN FETCH', 'EntityGraph', 'Lazy Loading'],
    answerGuidance: {
      summary: 'The N+1 problem occurs when Hibernate executes 1 query to fetch parent entities, and then N subsequent queries to fetch each associated child entity due to default lazy loading.',
      keyPoints: [
        'Cause: Fetching 50 Author entities triggers 1 query for authors, then 50 queries for their Books when accessed in a loop.',
        'Solution 1: Use "JOIN FETCH" in JPQL (SELECT a FROM Author a JOIN FETCH a.books).',
        'Solution 2: Use JPA @EntityGraph.',
        'Solution 3: Set batch size via @BatchSize(size = 25).'
      ],
      codeSnippet: `@Query("SELECT o FROM Order o JOIN FETCH o.orderItems WHERE o.customer.id = :customerId")
List<Order> findOrdersWithItems(@Param("customerId") Long customerId);`
    }
  },
  {
    id: 'tech-rest-api-design',
    topic: 'REST APIs',
    question: 'What makes an API truly RESTful? Explain HTTP verbs, idempotency, status codes, and security best practices.',
    difficulty: 'Easy',
    companyTags: ['Infosys', 'TCS', 'Amazon', 'Accenture', 'Microsoft'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Java Backend Interview & TCS Digital 2024',
    lastVerified: 'Dec 2024',
    keywords: ['REST', 'Idempotency', 'Statelessness', 'HTTP Status Codes', 'JWT', 'Rate Limiting'],
    answerGuidance: {
      summary: 'REST is an architectural style based on statelessness, resource identification via URIs, and uniform interface using standard HTTP methods.',
      keyPoints: [
        'Idempotent Methods: GET, PUT, DELETE (calling them multiple times produces same server state).',
        'Non-Idempotent: POST (calling twice creates two resources).',
        'Key Status Codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Error.',
        'Security: Use HTTPS, Bearer JWT in Authorization headers, CORS restrictions, input sanitization, and rate limiting.'
      ],
      codeSnippet: `@PostMapping("/api/v1/orders")
public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest req) {
    OrderDto created = orderService.create(req);
    URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        .path("/{id}").buildAndExpand(created.getId()).toUri();
    return ResponseEntity.created(location).body(created); // Returns 201 Created with Location header
}`
    }
  }
];
