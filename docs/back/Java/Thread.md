# Spring 提供用于管理多线程任务的组件

## ThreadPoolTaskScheduler 用于管理定时任务的线程

主要用途

- 用于管理基于时间的任务调度，例如定时任务（@Scheduled）、周期性任务（cron 表达式调度）等。

实现原理：

- 基于 ScheduledExecutorService（通常是 ScheduledThreadPoolExecutor），可以调度定时任务、周期性任务，或者延迟任务。

配置如下:

```java
@EnableScheduling
@Configuration
public class SchedulerConfig {
    @Bean // 创建一个线程池
    public ThreadPoolTaskScheduler taskScheduler() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler(); // 创建一个线程池 线程池的类型为 ThreadPoolTaskScheduler
        scheduler.setPoolSize(10); // 设置线程池大小
        scheduler.setThreadNamePrefix("MyScheduler-"); // 设置线程名称前缀
        scheduler.initialize(); // 初始化线程池
        scheduler.setRejectedExecutionHandler(new ThreadPoolExecutor.AbortPolicy()); // 设置 抛出 RejectedExecutionException 异常
        scheduler.setWaitForTasksToCompleteOnShutdown(true); // 设置 等待任务完成
        scheduler.setAwaitTerminationSeconds(60); // 设置 等待任务完成的时间
        return scheduler;
    }
}
```

## ThreadPoolTaskExecutor 用于管理线程池的线程

主要用途：

- 异步任务
- 并发任务
- 批量任务
- 任务调度
- 任务分发
- 任务处理
- 任务监控
- 任务管理

实现原理：

- 基于 ExecutorService（通常是 ThreadPoolExecutor），可以调度异步任务、并发任务、批量任务等。

配置如下:

```java
@EnableAsync
@Configuration
public class AsyncConfig {
    @Bean
    public ThreadPoolTaskExecutor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor(); // 创建一个线程池 线程池的类型为 ThreadPoolTaskExecutor
        executor.setCorePoolSize(10); // 设置核心线程数
        executor.setMaxPoolSize(20); // 设置最大线程数
        executor.setQueueCapacity(50); // 设置队列容量
        executor.setKeepAliveSeconds(60); // 设置线程空闲时间
        // executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy()); // 设置 将任务回退给调用者
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.AbortPolicy() ); // 设置 抛出 RejectedExecutionException 异常
        executor.setThreadNamePrefix("MyExecutor-"); // 设置线程名称前缀
        executor.initialize(); // 初始化线程池
        return executor;
    }
}
```

### ThreadPoolTaskExecutor 的多种拒绝策略

- ThreadPoolExecutor.AbortPolicy：默认策略，抛出 RejectedExecutionException 异常。
- ThreadPoolExecutor.CallerRunsPolicy：将任务回退给调用者。
- ThreadPoolExecutor.DiscardPolicy：丢弃任务。
- ThreadPoolExecutor.DiscardOldestPolicy：丢弃最老的任务。
